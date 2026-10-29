"use client";

import { useRef, useState } from "react";
import { flushSync } from "react-dom";
import { site } from "@/config/site";
import {
  backupPriorities,
  briefFileName,
  contactMethods,
  projectTypes,
  propertyOptions,
  timingOptions,
} from "@/content/planner";
import { ordinal, services, type ServiceSlug } from "@/content/services";
import {
  briefMailto,
  briefText,
  reviewEntries,
  summaryEntries,
  type BriefEntry,
  type BriefValues,
} from "@/lib/brief";
import { Icon } from "@/components/ui/icons";
import { Eyebrow } from "@/components/ui/text";

export type PlannerPreset = {
  service?: ServiceSlug;
  priorities?: string[];
};

type Step = 0 | 1 | 2;
type FieldValues = Omit<BriefValues, "projectType">;
type ErrorState = { field: "zip" | "notes"; message: string } | null;

const STEP_LABELS = ["Your project", "The details", "Your brief"];
const LAST_STEP: Step = 2;

const ERRORS = {
  zip: "Please enter a five-digit ZIP code so the team can review your location.",
  notes:
    "Please add a little more detail—at least 10 characters—about the project or concern.",
};

function initialValues(preset: PlannerPreset): FieldValues {
  return {
    service: preset.service ?? "electrical",
    property: propertyOptions[0],
    zip: "",
    timing: timingOptions[0],
    contactMethod: contactMethods[0],
    notes: "",
    customerName: "",
    replyTo: "",
    priorities: preset.priorities ?? [],
  };
}

function DefinitionRows({
  entries,
  rowClass,
}: {
  entries: BriefEntry[];
  rowClass: string;
}) {
  return entries.map(([term, value]) => (
    <div key={term} className={rowClass}>
      <dt>{term}</dt>
      <dd>{value}</dd>
    </div>
  ));
}

/** Three-step project brief with a live summary. Nothing is sent anywhere. */
export function ProjectPlanner({ preset = {} }: { preset?: PlannerPreset }) {
  const [fields, setFields] = useState<FieldValues>(() =>
    initialValues(preset),
  );
  // Each service remembers the project type last chosen for it.
  const [typeByService, setTypeByService] = useState<
    Partial<Record<ServiceSlug, string>>
  >({});
  const [step, setStep] = useState<Step>(0);
  const [error, setError] = useState<ErrorState>(null);
  const [downloadStatus, setDownloadStatus] = useState("");

  const plannerRef = useRef<HTMLDivElement>(null);
  const legendRefs = useRef<(HTMLLegendElement | null)[]>([]);
  const zipRef = useRef<HTMLInputElement>(null);
  const notesRef = useRef<HTMLTextAreaElement>(null);

  const projectType =
    typeByService[fields.service] ?? projectTypes[fields.service][0];
  const values: BriefValues = { ...fields, projectType };
  const isGenerator = fields.service === "generators";

  const set =
    <K extends keyof FieldValues>(key: K) =>
    (value: FieldValues[K]) =>
      setFields((current) => ({ ...current, [key]: value }));

  const togglePriority = (label: string, checked: boolean) =>
    setFields((current) => ({
      ...current,
      priorities: backupPriorities
        .map((item) => item.label)
        .filter((item) =>
          item === label ? checked : current.priorities.includes(item),
        ),
    }));

  function validate(): boolean {
    setError(null);
    if (step === 0 && !/^\d{5}$/.test(fields.zip.trim())) {
      setError({ field: "zip", message: ERRORS.zip });
      zipRef.current?.focus();
      return false;
    }
    if (step === 1 && fields.notes.trim().length < 10) {
      setError({ field: "notes", message: ERRORS.notes });
      notesRef.current?.focus();
      return false;
    }
    return true;
  }

  function showStep(next: Step) {
    flushSync(() => {
      setStep(next);
      setError(null);
    });
    legendRefs.current[next]?.focus({ preventScroll: true });
    plannerRef.current?.scrollIntoView({ block: "start", behavior: "instant" });
  }

  function advance() {
    if (step < LAST_STEP && validate()) showStep((step + 1) as Step);
  }

  function downloadBrief() {
    const url = URL.createObjectURL(
      new Blob([briefText(reviewEntries(values))], {
        type: "text/plain;charset=utf-8",
      }),
    );
    const link = document.createElement("a");
    link.href = url;
    link.download = briefFileName;
    document.body.append(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1500);
    setDownloadStatus(
      "Your brief is ready to save. Nothing has been sent to Ajalon Electric.",
    );
  }

  const invalid = (field: "zip" | "notes") =>
    error?.field === field ? true : undefined;

  const legend = (index: Step, text: string) => (
    <legend
      ref={(element) => {
        legendRefs.current[index] = element;
      }}
      tabIndex={-1}
    >
      {text}
    </legend>
  );

  return (
    <section className="container planner-layout section compact">
      <div className="planner" ref={plannerRef}>
        <div className="progress" aria-label="Project brief progress">
          {STEP_LABELS.map((label, index) => (
            <span
              key={label}
              className={index < step ? "complete" : undefined}
              aria-current={index === step ? "step" : undefined}
            >
              <b>{ordinal(index)}</b>
              {` ${label}`}
            </span>
          ))}
        </div>
        <noscript>
          <style>{"#project-form,.progress{display:none!important}"}</style>
          <p>
            {"To plan your project, "}
            <a href="/contact/">contact Ajalon Electric directly</a>.
          </p>
        </noscript>
        <form
          id="project-form"
          noValidate
          onSubmit={(event) => {
            event.preventDefault();
            advance();
          }}
        >
          <fieldset hidden={step !== 0}>
            {legend(0, "What can we help you plan?")}
            <p className="step-note">
              Choose the closest fit. The team will help clarify the scope.
            </p>
            <div className="service-choices">
              {services.map((service) => (
                <label key={service.slug}>
                  <input
                    type="radio"
                    name="service"
                    value={service.slug}
                    checked={fields.service === service.slug}
                    onChange={() => set("service")(service.slug)}
                  />
                  <span className="choice-icon">
                    <Icon name={service.icon} />
                  </span>
                  <span>
                    <strong>{service.label}</strong>
                    <small>{service.short}</small>
                  </span>
                  <span className="radio-dot"></span>
                </label>
              ))}
            </div>
            <div className="form-grid">
              <label>
                Property type
                <select
                  name="property"
                  value={fields.property}
                  onChange={(event) => set("property")(event.target.value)}
                >
                  {propertyOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </label>
              <label>
                {"ZIP code "}
                <small>Required</small>
                <input
                  ref={zipRef}
                  name="zip"
                  placeholder="e.g. 37914"
                  inputMode="numeric"
                  maxLength={5}
                  autoComplete="postal-code"
                  required
                  aria-describedby="zip-note"
                  aria-invalid={invalid("zip")}
                  value={fields.zip}
                  onChange={(event) => set("zip")(event.target.value)}
                />
              </label>
            </div>
            <p id="zip-note" className="fine">
              The team confirms coverage for your exact address.
            </p>
          </fieldset>

          <fieldset hidden={step !== 1}>
            {legend(1, "Make it your project.")}
            <p className="step-note">
              A few specifics help the first conversation go further.
            </p>
            <label>
              What best describes the project?
              <select
                name="projectType"
                value={projectType}
                onChange={(event) =>
                  setTypeByService((current) => ({
                    ...current,
                    [fields.service]: event.target.value,
                  }))
                }
              >
                {projectTypes[fields.service].map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
            <div className="form-grid">
              <label>
                Your timeframe
                <select
                  name="timing"
                  value={fields.timing}
                  onChange={(event) => set("timing")(event.target.value)}
                >
                  {timingOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </label>
              <label>
                Preferred contact method
                <select
                  name="contactMethod"
                  value={fields.contactMethod}
                  onChange={(event) => set("contactMethod")(event.target.value)}
                >
                  {contactMethods.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </label>
            </div>
            <div className="generator-fields" hidden={!isGenerator}>
              <span className="field-title">
                {"Your backup priorities "}
                <small>Optional</small>
              </span>
              <div className="brief-priorities">
                {backupPriorities.map(({ label }) => (
                  <label key={label}>
                    <input
                      type="checkbox"
                      name="priorities"
                      value={label}
                      disabled={!isGenerator}
                      checked={fields.priorities.includes(label)}
                      onChange={(event) =>
                        togglePriority(label, event.target.checked)
                      }
                    />
                    <span>{label}</span>
                  </label>
                ))}
              </div>
            </div>
            <label>
              {"Tell us what you have in mind "}
              <small>Required</small>
              <textarea
                ref={notesRef}
                name="notes"
                rows={5}
                maxLength={1200}
                required
                placeholder="Describe your goal, the area involved, or what you are noticing. Please leave out door codes and other sensitive information."
                aria-invalid={invalid("notes")}
                value={fields.notes}
                onChange={(event) => set("notes")(event.target.value)}
              ></textarea>
            </label>
            <div className="form-grid">
              <label>
                {"Your name "}
                <small>Optional</small>
                <input
                  name="customerName"
                  autoComplete="name"
                  maxLength={80}
                  value={fields.customerName}
                  onChange={(event) => set("customerName")(event.target.value)}
                />
              </label>
              <label>
                {"Reply email or phone "}
                <small>Optional</small>
                <input
                  name="replyTo"
                  autoComplete="off"
                  maxLength={120}
                  placeholder="How can the team reach you?"
                  value={fields.replyTo}
                  onChange={(event) => set("replyTo")(event.target.value)}
                />
              </label>
            </div>
            <p className="fine">
              These details stay in your browser until you choose to share the
              brief. This planner is not monitored for urgent requests.
            </p>
          </fieldset>

          <fieldset hidden={step !== 2}>
            {legend(2, "Your next step, clearly laid out.")}
            <p className="step-note">
              Review your brief. You decide when and how to share it.
            </p>
            <div id="review">
              {step === 2 && (
                <dl>
                  <DefinitionRows
                    entries={reviewEntries(values)}
                    rowClass="review-row"
                  />
                </dl>
              )}
            </div>
            <div className="review-notice">
              <Icon name="list" />
              <p>
                No request has been sent and no appointment is booked. The team
                will confirm the details with you.
              </p>
            </div>
            <div className="review-actions">
              <a
                className="button"
                href={step === 2 ? briefMailto(values) : `mailto:${site.email}`}
              >
                <span>Prepare email</span>
                <Icon name="up" />
              </a>
              <button
                className="button outline"
                type="button"
                onClick={downloadBrief}
              >
                <span>Download brief</span>
                <Icon name="download" />
              </button>
            </div>
            <p className="fine">
              {
                "Prepare email opens your email app with the brief ready to review and send. You can also call "
              }
              <a href={site.phone.href}>{site.phone.display}</a>.
            </p>
            <p role="status" className="fine">
              {downloadStatus}
            </p>
          </fieldset>

          <p className="form-error" role="alert">
            {error?.message}
          </p>
          <div className="form-controls">
            <button
              className="back-button"
              type="button"
              hidden={step === 0}
              onClick={() => step > 0 && showStep((step - 1) as Step)}
            >
              ← Back
            </button>
            <button
              id="next"
              className="button"
              type="button"
              hidden={step === LAST_STEP}
              onClick={advance}
            >
              {"Continue "}
              <Icon name="arrow" />
            </button>
          </div>
        </form>
      </div>
      <aside className="planner-aside">
        <div className="aside-mark">
          <Icon name="bolt" />
        </div>
        <Eyebrow>A LITTLE CLARITY. A LOT OF POSSIBILITY.</Eyebrow>
        <h2>
          Good energy
          <br /> starts with
          <br /> <em>a good plan.</em>
        </h2>
        <dl>
          <DefinitionRows entries={summaryEntries(values)} rowClass="" />
        </dl>
        <div className="aside-contact">
          <p>Prefer to talk it through?</p>
          <a href={site.phone.href}>{site.phone.display}</a>
          <span>Knoxville, Tennessee</span>
        </div>
      </aside>
    </section>
  );
}

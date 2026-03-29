# OpenClaw Deployment Checklist

Use this before promoting a workflow from staging to production.

## 1. Environment
- [ ] Staging and production are separated.
- [ ] Secrets are managed securely.
- [ ] Connector permissions are validated.

## 2. Workflow readiness
- [ ] Role scope is documented and approved.
- [ ] Runbook includes normal path and fallback path.
- [ ] Decision gates are active in execution flow.

## 3. Quality readiness
- [ ] Acceptance criteria documented.
- [ ] Reviewer checklist completed.
- [ ] Baseline test cases passed.

## 4. Risk readiness
- [ ] Escalation contact list exists.
- [ ] Rollback plan documented.
- [ ] Incident template prepared.

## 5. Launch controls
- [ ] Operator on-call confirmed.
- [ ] Daily triage slot booked.
- [ ] First-week review date scheduled.

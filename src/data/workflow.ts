export interface WorkflowStep {
    title: string;
    description: string;
}

export const workflowSteps: WorkflowStep[] = [
    {
        title: "Visitor requests a time",
        description: "A potential customer submits their preferred appointment details."
    },
    {
        title: "AI checks fit",
        description: "The assistant reviews the request and gathers the information needed to book."
    },
    {
        title: "Appointment is scheduled",
        description: "Confirmed bookings are added to your calendar or booking workflow."
    },
    {
        title: "Team gets notified",
        description: "Your team receives the appointment details instantly."
    }
];

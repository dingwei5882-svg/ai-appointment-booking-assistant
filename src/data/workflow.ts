export interface WorkflowStep {
    title: string;
    description: string;
}

export const workflowSteps: WorkflowStep[] = [
    {
        title: "User Books an Appointment",
        description: "A user requests a booking through a simple, conversational interface."
    },
    {
        title: "AI Confirms Availability",
        description: "The AI assistant instantly checks calendar availability and finds the perfect slot."
    },
    {
        title: "Calendar is Updated",
        description: "Once confirmed, the appointment is automatically synced to all relevant calendars."
    }
];

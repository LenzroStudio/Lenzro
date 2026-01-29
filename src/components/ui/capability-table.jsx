import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Check, CircleCheck, X } from "lucide-react";

const capabilities = [
  {
    capability: "Blackboard",
    Starter: true,
    Growth: true,
    Ops: true,
    Company: true,
    Enterprise: true,
  },
  {
    capability: "Widgets",
    Starter: "Basic",
    Growth: "Full",
    Ops: "Full",
    Company: "Full",
    Enterprise: "Full",
  },
  {
    capability: "Branding Canvas",
    Starter: false,
    Growth: true,
    Ops: true,
    Company: true,
    Enterprise: true,
  },
  {
    capability: "Payments",
    Starter: false,
    Growth: true,
    Ops: true,
    Company: true,
    Enterprise: true,
  },
  {
    capability: "Analytics",
    Starter: false,
    Growth: true,
    Ops: true,
    Company: true,
    Enterprise: true,
  },
  {
    capability: "AI Suggestions",
    Starter: true,
    Growth: true,
    Ops: true,
    Company: true,
    Enterprise: true,
  },
  {
    capability: "AI Actions",
    Starter: false,
    Growth: false,
    Ops: true,
    Company: true,
    Enterprise: true,
  },
  {
    capability: "Auto Layout",
    Starter: false,
    Growth: false,
    Ops: true,
    Company: true,
    Enterprise: true,
  },
  {
    capability: "Multi-Workspaces",
    Starter: false,
    Growth: false,
    Ops: false,
    Company: true,
    Enterprise: true,
  },
  {
    capability: "Custom AI Rules",
    Starter: false,
    Growth: false,
    Ops: false,
    Company: false,
    Enterprise: true,
  },
];

const plans = ["Starter", "Growth", "Ops", "Company", "Enterprise"];

export function CapabilityTable() {
  return (
    <Table className="min-w-full  text-sm">
      <TableHeader>
        <TableRow>
          <TableHead className="text-2xl gradient-text border-0">Capability</TableHead>
          {plans.map((plan) => (
            <TableHead key={plan} className="border-0 text-lg text-center">
              {plan}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {capabilities.map((row) => (
          <TableRow key={row.capability}>
            <TableCell className="text-lg border-0">{row.capability}</TableCell>
            {plans.map((plan) => (
              <TableCell key={plan} className="text-center border-0">
                {typeof row[plan] === "boolean" ? (
                  row[plan] ? (
                    <CircleCheck className="mx-auto size-4 text-green-400" />
                  ) : (
                    <X className="mx-auto text-pink-500" />
                  )
                ) : (
                  <span>{row[plan]}</span>
                )}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

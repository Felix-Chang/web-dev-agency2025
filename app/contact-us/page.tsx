import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Leave us your contact information',
};

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black p-8">
      <div className="max-w-6xl mx-auto">
        <Link
          href="/"
          className="inline-block mb-8 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
        >
          ← Back to Home
        </Link>

        <h1 className="text-5xl font-bold mb-6 text-black dark:text-zinc-50">
          Contact Us
        </h1>

        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-12">
          Leave us your contact information.
        </p>

        <form>
        <FieldGroup>
          <FieldSet>
            <FieldGroup>
              <Field>
                <FieldLegend>
                  First Name
                </FieldLegend>
                <Input
                  id="checkout-7j9-card-name-43j"
                  placeholder="First Name"
                  required
                />
              </Field>
              <Field>
                <FieldLegend>
                  Last Name
                </FieldLegend>
                <Input
                  id="checkout-7j9-card-name-43j"
                  placeholder="Last Name"
                  required
                />
              </Field>
              <Field>
                <FieldLegend>
                  Email
                </FieldLegend>
                <Input
                  id="checkout-7j9-card-name-43j"
                  placeholder="email"
                  required
                />
              </Field>
            </FieldGroup>
          </FieldSet>
          <FieldSet>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="checkout-7j9-optional-comments">
                  Message
                </FieldLabel>
                <Textarea
                  id="checkout-7j9-optional-comments"
                  placeholder="Add any additional comments"
                  className="resize-none"
                />
              </Field>
            </FieldGroup>
          </FieldSet>
          <Field orientation="horizontal">
            <Button type="submit" >Submit</Button>
          </Field>
        </FieldGroup>
      </form>
      </div>
    </div>
  );
}
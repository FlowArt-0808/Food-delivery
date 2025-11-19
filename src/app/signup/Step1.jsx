"use client";

"use client";

import ChevronLeft from "../Components/Vectors/ChevronLeft";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const Step1 = () => {
  return (
    <div className="flex gap-12 items-center justify-center">
      <div className="w-104 pl-25">
        <FieldSet>
          <FieldGroup className="gap-6">
            <div
              aria-label="Button to go back"
              className="w-8 h-8 flex items-center justify-center border-[#E4E4E7] border rounded-md"
            >
              <ChevronLeft />
            </div>

            <Field>
              <FieldLabel className="text-[24px] text-[#09090B] font-semibold">
                Create your account
              </FieldLabel>
              <FieldDescription className="text-[16px] font-400 text-[#71717A]">
                Sign up to explore your favorite dishes.
              </FieldDescription>
            </Field>

            <Input
              id="username"
              type="text"
              placeholder="Enter your email address"
            />

            {/* 
            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <FieldDescription>
                Must be at least 8 characters long.
              </FieldDescription>
              <Input id="password" type="password" placeholder="••••••••" />
            </Field> 
            */}

            <Button>
              <div>Lets Go</div>
            </Button>

            <div
              aria-label="Section to login"
              className="flex items-center justify-center text-[16px] gap-3"
            >
              Already have an account?{" "}
              <a
                href="http://localhost:3000/login"
                className="text-[#2563EB]"
              >
                Log in
              </a>
            </div>
          </FieldGroup>
        </FieldSet>
      </div>

      <div
        aria-label="Image for user form"
        className="bg-[url(./Components/Images/UserFormImage.png)] bg-center bg-no-repeat w-[856px] h-[904px] rounded-md pr-5"
      ></div>
    </div>
  );
};

export default Step1;

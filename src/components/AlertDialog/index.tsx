import { AlertCircleIcon, InfoIcon } from "lucide-react";
import React from "react";
import { chain } from "react-aria";
import { Heading } from "react-aria-components";
import { Button } from "../Button";
import { Dialog } from "../Dialog";
import { AlertDialogProps } from "./types";

export function AlertDialog({
  title,
  variant,
  cancelLabel,
  actionLabel,
  onAction,
  children,
  ...props
}: AlertDialogProps) {
  return (
    <Dialog role="alertdialog" {...props}>
      {({ close }) => (
        <>
          <Heading
            slot="title"
            className="text-xl font-semibold leading-6 my-0"
          >
            {title}
          </Heading>
          <div
            className={`w-6 h-6 absolute right-6 top-6 stroke-2 ${
              variant === "destructive" ? "text-red-500" : "text-blue-500"
            }`}
          >
            {variant === "destructive" ? (
              <AlertCircleIcon aria-hidden />
            ) : (
              <InfoIcon aria-hidden />
            )}
          </div>
          <p className="mt-3 text-slate-500 dark:text-zinc-400">{children}</p>
          <div className="mt-6 flex justify-end gap-2">
            <Button variant="secondary" onPress={close}>
              {cancelLabel || "Cancel"}
            </Button>
            <Button
              variant={variant === "destructive" ? "destructive" : "primary"}
              autoFocus
              onPress={chain(onAction, close)}
            >
              {actionLabel}
            </Button>
          </div>
        </>
      )}
    </Dialog>
  );
}

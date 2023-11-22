"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useWorkStore } from "../store/workStore";
import { api } from "@/trpc/react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { useRouter } from "next/navigation";
import { useTranslate } from "@/locales/utils";

export default function DeleteWorkConfirm() {
  const { cancelDelete, workToDelete } = useWorkStore((state) => ({
    workToDelete: state.workToDelete,
    cancelDelete: state.cancelDelete,
  }));
  const { toast } = useToast();
  const translateToast = useTranslate("toast");
  const t = useTranslate("experience.delete");
  const router = useRouter();
  const { mutate, isLoading } = api.work.delete.useMutation({
    onSuccess: () => {
      router.refresh();
      cancelDelete();
      toast({
        title: t("toast.title"),
        description: t("toast.description"),
      });
    },
    onError: (_err, values) => {
      const tryAgain = () => mutate(values);
      toast({
        variant: "destructive",
        title: translateToast("error.title"),
        description: translateToast("error.description"),
        action: (
          <ToastAction onClick={tryAgain} altText={translateToast("tryAgain")}>
            {translateToast("tryAgain")}
          </ToastAction>
        ),
      });
    },
  });

  return (
    <Dialog
      open={Boolean(workToDelete)}
      onOpenChange={(open) => !open && cancelDelete()}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t("confirm.title")}</DialogTitle>
          <DialogDescription>
            {t("confirm.description.1")}
            <br />
            {t("confirm.description.2")}
          </DialogDescription>
          <DialogFooter>
            <Button
              disabled={isLoading}
              onClick={() => workToDelete && mutate({ id: workToDelete.id })}
            >
              {t("confirm.submit")}
            </Button>
          </DialogFooter>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

import { useI18n } from "@/locales/client";
import { api } from "@/trpc/react";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { useRouter } from "next/navigation";

type UseMutationFunctionType = typeof api.work.create.useMutation;
type TUseCreateWork = (
  ...args: Parameters<UseMutationFunctionType>
) => ReturnType<UseMutationFunctionType>;

export const useCreateWork: TUseCreateWork = (props) => {
  const { toast } = useToast();
  const router = useRouter();
  const t = useI18n();
  const mutation = api.work.create.useMutation({
    ...props,
    onSuccess: (...onSuccessParams) => {
      router.refresh();
      toast({
        title: t("experience.create.toast.title"),
        description: t("experience.create.toast.description"),
      });
      props?.onSuccess?.(...onSuccessParams);
    },
    onError: (_err, values) => {
      const tryAgain = () => mutation.mutate(values);
      toast({
        variant: "destructive",
        title: t("toast.error.title"),
        description: t("toast.error.description"),
        action: (
          <ToastAction onClick={tryAgain} altText={t("toast.tryAgain")}>
            {t("toast.tryAgain")}
          </ToastAction>
        ),
      });
    },
  });

  return mutation;
};

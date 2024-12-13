import { Form } from "react-hook-form";
import * as z from "zod";
export default function Home() {
  const formSchema = z.object({
    email: string(),
  });
  const form = useForm(
    {
      // resolver:zodResolver(formSchema),
      defaultValues:{
        email:""
      }
    }
  );
  function onSubmit() {}
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
          </form>
        </Form>
      </main>
    </div>
  );
}

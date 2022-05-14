import { CloseButton } from "./CloseButton";

const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: "",
      alt: "",
    },
  },
  IDEA: {
    title: "Ideia",
    image: {
      source: "",
      alt: "",
    },
  },
  OTHER: {
    title: "Outro",
    image: {
      source: "",
      alt: "",
    },
  },
};

export function WidgetForm() {
  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>

        <CloseButton />
      </header>

      <div className="flex py-8 gap-2 w-full">
        <button></button>
      </div>
      <p>hello</p>

      <footer className="text-xs text-neutral-400">feito com s2 por mim</footer>
    </div>
  );
}

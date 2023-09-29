export default function ({
  setShowModal,
}: {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="p-8 px-6 rounded-3xl bg-[white] min-w-full [&>p]:mb-4 text-sm">
      <p>
        Hello. My name is Kingsley Okafor. Welcome to my second task. So I
        believe it's important to talk about some decisions I made while I
        worked on this.
      </p>
      <p>
        First of all, I decided to build the entire application without any
        extra dependencies like it was suggested. Since I chose to stand out and
        show off my skills, I chose to build the second option and use
        react-chartjs-2 for the Chart Component.
      </p>
      <p>
        Secondly, because of the search and sort functionality in the UI, I
        decided to use a dynamic table for only that portion of the UI in order
        to stand out. This means that you can sort based on certain tags and in
        ascending/descending order too (in the portion of the UI where dynamic
        table was used). Everything else is purely static.
      </p>
      <p>
        Thirdly, concerning sorting, when the arrow icon points down, it means
        it is in ascending order (as the list goes on, the values get bigger),
        else it is in descending order. Ascending/descednding only works when
        you select what you want to sort by.
      </p>
      <p>
        Fourthly, I really want to commend the UI/UX designer who worked on
        this. The design is really clean. Thumbs up!!!
      </p>
      <p>
        Finally, I used context and reducers to manage the data for the dynamic
        table where it was applied in the entire application. I only used
        useState within certain components.
      </p>
      <p>
        Please go through my code and if possible I would love to hear your
        thoughts about how well I did on this project. It took me about 4 hours
        to complete. You can email me on{" "}
        <a className="underline" href="mailto:nonsokingsley61@gmail.com">
          nonsokingsley61@gmail.com
        </a>
        . Thank you.
      </p>
      <button
        className="bg-primary-blue text-[white] p-2 px-3 rounded-full flex justify-center w-full mt-5"
        onClick={() => setShowModal(false)}
      >
        Dismiss
      </button>
    </div>
  );
}

const page = () => {
  return (
    <section className="flex justify-center items-center min-h-screen h-screen mt-20 bg-[#111827] p-4">
      <iframe
        src="/pdfs/resume.pdf"
        frameBorder="0"
        className="w-full max-w-4xl h-full shadow-lg rounded-lg"
      ></iframe>
    </section>
  );
};

export default page;

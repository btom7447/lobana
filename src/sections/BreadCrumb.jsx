
export default function BreadCrumbSection({ title, subtext }) {
    return (
      <section className="pt-50 w-full px-5 lg:px-20 py-20 bg-blue-300 flex-col items-center justify-center gap-10">
        <h5 className="text-gray-800 text-center text-3xl mb-5">{title}</h5>
        <p className="text-gray-800 text-center text-lg lg:text-xl font-light">
          {subtext}
        </p>
      </section>
    );
}
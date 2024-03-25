const Feed = ({ title, link, date }) => {
  let formatted = { day: "numeric", month: "long", year: "numeric" };
  let articleDate = new Date(date).toLocaleDateString("en-GB", formatted);
  return (
    <>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-90 hover:text-blue-900"
      >
        <h3 className="text-xl mb-1">{title}</h3>
      </a>
      <h3>{articleDate}</h3>
    </>
  );
};

export default Feed;

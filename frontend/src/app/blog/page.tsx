export default function Blog() {
  return (
    <div className="page-minheight flex justify-center items-center">
      <div className="coming-soon">
        <div className="coming-soon__heading-row">
          <img
            src="images/icons/gearbox.svg"
            alt=""
            className="coming-soon__gear-icon"
          />
          <div className="coming-soon__heading">Coming Soon</div>
        </div>

        <p className="coming-soon__p">
          The blog is still currently in the works. Come back later to get
          coding tips and tricks, case studies, a look into front-end
          development trends.
        </p>
      </div>
    </div>
  );
}

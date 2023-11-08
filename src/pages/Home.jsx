import Swiper from "../components/Swiper";
import log1 from "../../public/faruk.jpg";
import log2 from "../../public/log2.png";
const Home = () => {
  return (
    <>
      <Swiper />

      <div className="container">
        <div className="d-flex justify-content-center gap-5 text-center fw-semibold py-5 border-bottom border-5">
          <div className="card p-3">
            <h1 className="fw-bold">50,000+</h1>

            <p>Total Examinee</p>
          </div>
          <div className="card p-3">
            <h1 className="fw-bold">51,088</h1>

            <p>Total Enlisted School</p>
          </div>

          <div className="card p-3">
            <h1 className="fw-bold">5106</h1>
            <p>Total Exam Center</p>
          </div>
          <div className="card p-3">
            <h1 className="fw-bold">5,000+</h1>

            <p>Total Teacher</p>
          </div>

          <div className="card p-3">
            <h1 className="fw-bold">1,200 +</h1>

            <p>Certificate Handover</p>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <h2 className="fw-bold text-center mb-5">
          WELCOME TO BANGLADESH KINDERGARTEN ASSOCIATION
        </h2>
        <div className="row">
          <div className="col-6">
            <p className="text-secondary text-justify">
              Welcome to the official website of the Bangladesh Kindergarten
              Association. Students are our future wealth and mighty. To give
              them proper education is our responsibility. If the students are
              well taught, they will be our property. They will bring us
              reputation and dignity. Otherwise, they will be the burden of
              society, As such; they will commit theft and deceit. As a result,
              there will be no peace and safety; we shall have to live with
              tension and anxiety. People will suffer a great deal of
              difficulty. So to guide the student’s to the right path is
              necessary. Talents lie concealed in the students with purity;
              Teachers must exhibit them with sincerity. Also teachers must
              teach as per quality. To lead the country to prosperity. A teacher
              is man making maker, if he does his duty, otherwise, he is man
              killing maker and he is nasty. If a teacher serves to the best of
              his ability, He will be able to gain popularity. If a student
              studies to the best of his Capacity, He will be able to acquire
              originality. So, we request the teachers to serve with honesty,
              and advise the students to study with sincerity. Teacher and
              student will maintain regularity. Also, they will maintain
              punctuality. A teacher must have morality and personality; also he
              will have solidity and individuality. In teach and students will
              lie affability and validity, Also will lie affinity and
              advisability. A teacher should be chatty, In order to gain
              familiarity. To be good teacher, one should have diligence and
              probity. Also should have dainty and specialty, under the
              circumstances, I believe with certainly, Teachers and students
              will do the needful with guaranty.
            </p>
          </div>
          <div className="col-6 text-center">
            <p className="fw-semibold">BANGLADESH KINDERGARTEN ASSOCIATION</p>

            <p className="mb-4">Logo & Trade Mark Logo</p>

            <div className="">
              {/* <img src={log1} alt="" /> */}
              <img src={log2} height={200} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="text-center mb-5">
          <h2>Explore What We Are Doing Better</h2>
          <h5>
            We are constantly working to solve various problems of Kindergarten
            schools all over Bangladesh
          </h5>
        </div>
        <div className="d-flex gap-3">
          <div className="card w-25 border-end border-4 p-3">
            <h6> Legal Information </h6>
            <p>
              {" "}
              Bangladesh Kindergarten Association was started in 1998 by a few
              of us teachers. We have done all the necessary documents/papers
              for the government.
            </p>
          </div>

          <div className="card w-25 border-end border-4 p-3">
            <h6>Mission & Vision </h6>

            <p>
              {" "}
              To educate all students to the highest levels of academic
              achievement, to enable them to reach & expand their potential to
              prepare them to become productive, responsible members of society.
            </p>
          </div>

          <div className="card w-25 border-end border-4 p-3">
            <h6> Our Committee</h6>
            <p>
              Bangladesh Kindergarten Association is managed by three types of
              committees, They are- 1. Advisory Council 2. Central Executive
              Council 3. Regional Committee Leaders
            </p>
          </div>

          <div className="card w-25 border-end border-4 p-3">
            <h6> Who We Are</h6>
            <p>
              Bangladesh Kindergarten Association is managed by three types of
              committees, They are- 1. Advisory Council 2. Central Executive
              Council 3. Regional Committee Leacard
            </p>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <h2 className="fw-bold text-center mb-5">
          Meet The Association Members
        </h2>
        <div className="d-flex gap-4 justify-content-center">
          <div className="card shadow-sm">
            <div className="text-center">
              <img className="" height={250} src={log1} alt="" />
              <h5 className="mt-3">Md. Faruk Ahmed</h5>
              <p className="mb-3"> Deputy Secretary</p>
            </div>
          </div>
          <div className="card shadow-sm">
            <div className="text-center">
              <img className="" height={250} src={log1} alt="" />
              <h5 className="mt-3">Md. Faruk Ahmed</h5>
              <p className="mb-3"> Deputy Secretary</p>
            </div>
          </div>
          <div className="card shadow-sm">
            <div className="text-center">
              <img className="" height={250} src={log1} alt="" />
              <h5 className="mt-3">Md. Faruk Ahmed</h5>
              <p className="mb-3"> Deputy Secretary</p>
            </div>
          </div>
          <div className="card shadow-sm">
            <div className="text-center">
              <img className="" height={250} src={log1} alt="" />
              <h5 className="mt-3">Md. Faruk Ahmed</h5>
              <p className="mb-3"> Deputy Secretary</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-dark text-white text-center py-5">
        <h2>
          WE WILL HELP YOU EVERY STEP OF THE WAY 
    </h2>
          <p className="text-secondary fw-semibold">Please feel free to contact us
          for any kind of problems related to your Kindergarten School. We will
          try to solve it as soon as possible In Sha Allah</p>
    
      </div>
    </>
  );
};

export default Home;

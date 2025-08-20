import PageHeader from "../CommonCoponents/PageHeader";

const AboutMe = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto">
        {/* Parent container */}
        <div className="px-[160px] py-[160px] max-[479px]:p-3 bg-Bg-Brand-Tertiary flex flex-col lg:flex-row items-start gap-8 rounded-2xl max-sm:p-3">
          {/* About Me Content */}
          <div className="w-full lg:w-[48%]">
            <div className="pb-[80px] max-[479px]:pb-6 max-sm:pb-6">
              <PageHeader title={"GET TO KNOW ME"} header={"About Me"} />
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-base max-[479px]:text-base text-Text-Neutral-Secondary">
                I am skilled in facilitating the entire lifecycle of a data
                science project, including Data Extraction, Pre-Processing,
                Feature Engineering, Dimensionality Reduction, Algorithm
                Implementation, Back Testing, and Validation. Proficient in
                various data transformation techniques, I tailor solutions to
                specific dataset requirements. Experienced in analyzing missing
                data, I introduce dummy variables for missingness and employ
                imputation methods such as iterative imputer in Python. I am
                adept at applying regression and classification models, ensemble
                learning techniques, and clustering methods.
              </p>
              <p className="text-base max-[479px]:text-base text-Text-Neutral-Secondary pt-4">
                With extensive experience in data cleansing and visualization, I
                use tools like Tableau, PowerBI, Denodo, Seaborn, Matplotlib,
                and ggplot2. Proficient in configuring Salesforce quote-to-cash
                functionalities, I also develop AI solutions using Neural
                Networks and Deep Learning. Skilled in Big Data tools like
                Hadoop HDFS, Spark, and MapReduce, I also perform Web Data
                Mining and NLP. Additionally, I manage projects using JIRA and
                Confluence, and conduct financial analysis using Python, R, and
                SAS.
              </p>
            </div>
          </div>

          {/* Research Interests */}
          <div className="w-full lg:w-[48%] flex flex-col gap-6 max-[479px]:pt-8">
            <h3 className="text-4xl font-semibold pb-4 text-Text-Neutral-Primary">
              Research Interests
            </h3>
            <div className="flex flex-col gap-y-4">
              {/* Item 1 */}
              <div>
                <h4 className="font-semibold text-[60px] leading-[110%] text-Text-Brand-Primary pb-2 max-[479px]:text-4xl">
                  01
                </h4>
                <h5 className="text-2xl font-medium text-Text-Neutral-Primary pb-2 max-[479px]:text-xl">
                  Data Science & Machine Learning
                </h5>
                <p className="text-base text-Text-Neutral-Secondary max-[479px]:text-sm">
                  Developing and applying data-driven models to extract
                  insights, forecast trends, and solve complex problems.
                </p>
              </div>

              {/* Item 2 */}
              <div>
                <h4 className="font-semibold text-[60px] leading-[110%] text-Text-Brand-Primary pb-2 max-[479px]:text-4xl">
                  02
                </h4>
                <h5 className="text-2xl font-medium text-Text-Neutral-Primary pb-2 max-[479px]:text-xl">
                  Big Data & AI Tools
                </h5>
                <p className="text-base text-Text-Neutral-Secondary max-[479px]:text-sm">
                  Using Hadoop, Spark, MapReduce, and AI solutions for data
                  transformation and predictive modeling.
                </p>
              </div>

              {/* Item 3 */}
              <div>
                <h4 className="font-semibold text-[60px] leading-[110%] text-Text-Brand-Primary pb-2 max-[479px]:text-4xl">
                  03
                </h4>
                <h5 className="text-2xl font-medium text-Text-Neutral-Primary pb-2 max-[479px]:text-xl">
                  Visualization & Project Management
                </h5>
                <p className="text-base text-Text-Neutral-Secondary max-[479px]:text-sm">
                  Expert in Tableau, PowerBI, JIRA, Confluence, and reporting
                  dashboards for effective project tracking and visualization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

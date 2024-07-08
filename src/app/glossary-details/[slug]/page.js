"use client";

import ContactForm from "@/app/component/ContactForm";
import FooterSection from "@/app/component/FooterSection";
import NavBar from "@/app/component/NavBar";
import RelatedGlossary from "@/app/component/RelatedGlossary";
import SideSection from "@/app/component/SideSection";
import { useEffect, useState } from "react";

export default function Page({ params }) {
  const [glossaryData, setGlossaryData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts/1"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setGlossaryData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="Headbg">
        <div className="container">
          <NavBar />
          <div className="mt-5">
            <h4 className="textGradient fs-3 fw-bold text-center mb-2">
              App Store Optimization (ASO)
            </h4>
            <p className="text-center text-white fs-5">
              App store optimization(ASO) is the process of increasing your app
              visibility within the app stores and improving app conversion
              rates. It is all about applying the scientific method to mobile
              KPIs that are related to the app stores.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-9 col-md-12 col-12">
            <div className="costMargin detailsPage">
              {glossaryData && (
                <>
                  <h2 className="textGradient fs-3 fw-bold mb-2">
                    {glossaryData.title}
                  </h2>
                  <p className=" text-white fs-5 mb-4">{glossaryData.body}</p>
                  <ul>
                    <li>List item 1</li> {/* Replace with API data */}
                    <li>List item 2</li> {/* Replace with API data */}
                    <li>List item 3</li> {/* Replace with API data */}
                  </ul>
                  <div className="clearfix"></div>
                  <ol>
                    <li>Ordered item 1</li> {/* Replace with API data */}
                    <li>Ordered item 2</li> {/* Replace with API data */}
                    <li>Ordered item 3</li> {/* Replace with API data */}
                  </ol>
                  <div className="clearfix"></div>
                </>
              )}

              <h5 className="textGradient fs-4 fw-bold mt-3">Related Terms</h5>
              <RelatedGlossary />
            </div>
          </div>
          <div className="col-xl-3 col-md-12 col-12">
            <SideSection />
          </div>
        </div>
      </div>
      <div className="container">
        <ContactForm />
      </div>
      <FooterSection />
    </>
  );
}

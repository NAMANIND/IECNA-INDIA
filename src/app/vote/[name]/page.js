"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { firestore } from "../../../../firbase/clientApp";
import Head from "@/components/head/Head";

const PersonalVote = ({ params }) => {
  const { name } = params;
  const [nomineeData, setNomineeData] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState({});

  useEffect(() => {
    const fetchNomineeData = async () => {
      try {
        // Split the name into first and last names
        const [firstName, lastName] = name.toLowerCase().split("_");

        // Query the database with lowercase first and last names
        const nomineeSnapshot = await firestore
          .collection("nominees")
          .where("firstName", "==", firstName)
          .where("lastName", "==", lastName)
          .get();

        if (nomineeSnapshot.empty) {
          console.log("Nominee not found!");
          // Handle nominee not found (show 404 or a message)
          return;
        }

        const nominee = nomineeSnapshot.docs[0].data();
        setNomineeData(nominee);
        // Initialize selected categories
        const initialSelectedCategories = {};
        for (const categoryKey in nominee.categories) {
          initialSelectedCategories[categoryKey] = false;
        }
        setSelectedCategories(initialSelectedCategories);
      } catch (error) {
        console.error("Error fetching nominee data:", error);
      }
    };

    if (name) {
      fetchNomineeData();
    }
  }, [name]);

  const handleCategorySelect = (categoryKey) => {
    setSelectedCategories((prevSelectedCategories) => ({
      ...prevSelectedCategories,
      [categoryKey]: !prevSelectedCategories[categoryKey],
    }));
  };

  const handleVote = async () => {
    try {
      // Fetch the latest nominee data before voting
      const nomineeRef = firestore.collection("nominees").doc(nomineeData.id);
      const nomineeDoc = await nomineeRef.get();

      if (!nomineeDoc.exists) {
        console.error("Nominee not found");
        return;
      }

      const updatedNomineeData = nomineeDoc.data();

      const batch = firestore.batch();

      // Iterate over the selected categories and update their vote counts
      for (const [categoryKey, voteCount] of Object.entries(
        selectedCategories
      )) {
        if (voteCount !== null) {
          // Check if the category was selected for voting
          batch.update(nomineeRef, {
            [`categories.${categoryKey}.vote`]:
              updatedNomineeData.categories[categoryKey].vote + 1,
          });
        }
      }

      await batch.commit();
      console.log("Votes recorded successfully!");

      // Clear selected categories after voting
      setSelectedCategories({});

      // Show a popup alert
      window.alert("Thank you for voting!");
    } catch (error) {
      console.error("Error recording votes:", error);
    }
  };

  const [firstName, lastName] = name.toLowerCase().split("_");
  return (
    <div>
      <Head head="Vote for me" />
      {nomineeData && (
        <div className=" mx-auto p-8 bg-white rounded-lg shadow-lg">
          <h1 className="text-3xl font-semibold uppercase mb-8 text-center ">
            {firstName} {lastName}
          </h1>
          <div className="relative w-full flex justify-center h-64 mb-4 overflow-hidden rounded-lg">
            <img
              src={nomineeData.imageUrl}
              alt={name}
              layout="fill"
              objectFit="cover"
              width={300}
              height={300}
              className="object-cover rounded-lg"
            />
          </div>
          <h2 className="text-xl font-semibold mb-4">Categories:</h2>
          {/* <div className="grid grid-cols-2 gap-4">
     {Object.entries(nomineeData.categories).map(
       ([categoryKey, category]) => (
         <div key={categoryKey} className="flex flex-col">
           <label>
             <input
               type="checkbox"
               checked={selectedCategories[categoryKey]}
               onChange={() => handleCategorySelect(categoryKey)}
             />
             {category.og}
           </label>
         </div>
       )
     )}
   </div> */}

          <div className="grid grid-cols-2 gap-4">
            {Object.entries(nomineeData.categories).map(
              ([categoryKey, category]) => (
                <button
                  key={categoryKey}
                  className={`bg-gray-200 p-4 rounded-lg transition duration-300 ease-in-out transform hover:bg-gray-800 hover:text-white ${
                    selectedCategories[categoryKey]
                      ? "bg-gray-800 text-white"
                      : ""
                  }`}
                  onClick={() => handleCategorySelect(categoryKey)}
                  onChange={() => handleCategorySelect(categoryKey)}
                >
                  {category.og}
                </button>
              )
            )}
          </div>
          {Object.values(selectedCategories).some((value) => value) && (
            <div className="sticky bottom-10 w-full flex justify-center">
              <button
                onClick={handleVote}
                className="newsletterbtn w-1/2 mx-auto"
              >
                Vote
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PersonalVote;

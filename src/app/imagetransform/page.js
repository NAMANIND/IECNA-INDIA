"use client";

import React, { use, useEffect, useState } from "react";
import fileDownload from "js-file-download";
import axios from "axios";
import { firestore } from "../../../firbase/clientApp";
import { CircularProgress } from "@mui/material";

function ImageDownloadPage({
  imageData,
  title,
  company,
  category,
  field,
  marco,
  rem,
  email,
}) {
  const [transformedImageUrl, setTransformedImageUrl] = useState(null);
  const [displayed, setDisplayed] = useState(true);

  // useEffect(() => {

  // }, [transformedImageUrl]);

  useEffect(() => {
    const uploadImage = async () => {
      const formData = new FormData();
      formData.append("upload_preset", "iecna_upload_india");
      formData.append("file", imageData);

      try {
        const response = await fetch(
          "https://api.cloudinary.com/v1_1/dmedpnbvc/image/upload",
          {
            method: "POST",
            body: formData,
          }
        );
        const data = await response.json();

        applyTransformations(data.public_id);
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    };

    uploadImage();
  }, [imageData]);

  const handleDownload = () => {
    fileDownload(imageData, `${title}.jpg`);
  };

  useEffect(() => {
    if (!displayed) {
      handleDownloadTransformed();
    }
  }, [displayed]);

  const handleDownloadTransformed = () => {
    if (transformedImageUrl) {
      axios
        .get(transformedImageUrl, {
          responseType: "blob",
        })
        .then((res) => {
          fileDownload(res.data, `${title.replace(/\s/g, "")}_transformed.jpg`);
        })
        .catch((error) => {
          console.error("Error downloading transformed image:", error);
        });
    }
  };

  const applyTransformations = (publicId) => {
    const transformationParams = publicId.split("/");
    const overlayParam = transformationParams[1];
    // Construct the URL with the required transformations
    if (category === "speaker") {
      if (field === "marketer") {
        const transformedImageUrl =
          `https://res.cloudinary.com/dmedpnbvc/image/upload/` +
          `l_iecna_upload_india:${overlayParam}/fl_layer_apply,ar_1.0,c_lfill,w_352,h_352,x_0,y_-2,r_max/c_scale/co_rgb:FFFFFF,l_text:arial_42_bold_normal_left:${encodeURIComponent(
            title
          )}/fl_layer_apply,x_0,y_270/co_rgb:FFFFFF,l_text:arial_28_normal_left:${encodeURIComponent(
            company
          )}/fl_layer_apply,x_0,y_320/co_rgb:FFFFFF,l_text:arial_28_normal_left:${encodeURIComponent(
            marco
          )}/fl_layer_apply,x_0,y_360/ayyqjsejrucyoiisutyz.jpg`;

        setTransformedImageUrl(transformedImageUrl);
      } else {
        const transformedImageUrl =
          `https://res.cloudinary.com/dmedpnbvc/image/upload/` +
          `l_iecna_upload_india:${overlayParam}/fl_layer_apply,ar_1.0,c_lfill,w_352,h_352,x_0,y_-2,r_max/c_scale/co_rgb:FFFFFF,l_text:arial_42_bold_normal_left:${encodeURIComponent(
            title
          )}/fl_layer_apply,x_0,y_270/co_rgb:FFFFFF,l_text:arial_28_normal_left:${encodeURIComponent(
            company
          )}/fl_layer_apply,x_0,y_320/ayyqjsejrucyoiisutyz.jpg`;

        setTransformedImageUrl(transformedImageUrl);
      }
    }

    if (category == "delegate") {
      if (field === "marketer") {
        const transformedImageUrl =
          `https://res.cloudinary.com/dmedpnbvc/image/upload/` +
          `l_iecna_upload_india:${overlayParam}/fl_layer_apply,ar_1.0,c_thumb,w_355,h_355,x_326,y_-42,r_max/c_scale/co_rgb:FFFFFF,l_text:arial_42_bold_normal_left:${encodeURIComponent(
            title
          )}/fl_layer_apply,x_326,y_200/co_rgb:FFFFFF,l_text:arial_28_normal_left:${encodeURIComponent(
            company
          )}/fl_layer_apply,x_326,y_245/co_rgb:FFFFFF,l_text:arial_28_normal_left:${encodeURIComponent(
            marco
          )}/fl_layer_apply,x_326,y_280/htp6y2eawvkwraazix5w.jpg`;

        setTransformedImageUrl(transformedImageUrl);
      } else {
        const transformedImageUrl =
          `https://res.cloudinary.com/dmedpnbvc/image/upload/` +
          `l_iecna_upload_india:${overlayParam}/fl_layer_apply,ar_1.0,c_thumb,w_355,h_355,x_326,y_-42,r_max/c_scale/co_rgb:FFFFFF,l_text:arial_42_bold_normal_left:${encodeURIComponent(
            title
          )}/fl_layer_apply,x_326,y_200/co_rgb:FFFFFF,l_text:arial_28_normal_left:${encodeURIComponent(
            company
          )}/fl_layer_apply,x_326,y_245/htp6y2eawvkwraazix5w.jpg`;

        setTransformedImageUrl(transformedImageUrl);
      }
    }

    if (category === "nomination") {
      if (field === "marketer") {
        const transformedImageUrl =
          `https://res.cloudinary.com/dmedpnbvc/image/upload/` +
          `l_iecna_upload_india:${overlayParam}/fl_layer_apply,ar_1.0,c_lfill,w_352,h_352,x_0,y_-22,r_max/c_scale/co_rgb:FFFFFF,l_text:arial_42_bold_normal_left:${encodeURIComponent(
            title
          )}/fl_layer_apply,x_0,y_310/co_rgb:FFFFFF,l_text:arial_28_normal_left:${encodeURIComponent(
            company
          )}/fl_layer_apply,x_0,y_360/co_rgb:FFFFFF,l_text:arial_28_normal_left:${encodeURIComponent(
            marco
          )}/fl_layer_apply,x_0,y_400/ojlopewl8pnkdcsracjf.jpg`;

        setTransformedImageUrl(transformedImageUrl);
      } else {
        const transformedImageUrl =
          `https://res.cloudinary.com/dmedpnbvc/image/upload/` +
          `l_iecna_upload_india:${overlayParam}/fl_layer_apply,ar_1.0,c_lfill,w_352,h_352,x_0,y_-22,r_max/c_scale/co_rgb:FFFFFF,l_text:arial_42_bold_normal_left:${encodeURIComponent(
            title
          )}/fl_layer_apply,x_0,y_310/co_rgb:FFFFFF,l_text:arial_28_normal_left:${encodeURIComponent(
            company
          )}/fl_layer_apply,x_0,y_360/ojlopewl8pnkdcsracjf.jpg`;

        setTransformedImageUrl(transformedImageUrl);
      }
    }
  };

  const handleImageLoad = () => {
    // Call your function here after the image has loaded
    console.log("Transformed image loaded!");
    setDisplayed(false);
    if (transformedImageUrl !== null) {
      const trfRef = firestore.collection("india-2025-transformed-images");
      trfRef
        .where("trf", "==", rem)
        .get()
        .then((querySnapshot) => {
          if (querySnapshot.empty) {
            // Check if no documents with the same trf value exist
            const newTrfRef = trfRef.doc(); // Generate a new document reference
            const trfId = newTrfRef.id;
            console.log(trfId);
            newTrfRef
              .set({
                id: trfId,
                name: title,
                url: transformedImageUrl,
                trf: rem,
                email: email,
              })
              .catch((error) => {
                console.error("Error setting document:", error);
              });
          }
        })
        .catch((error) => {
          console.error("Error checking documents:", error);
        });
    }
  };

  if (!transformedImageUrl) {
    return (
      <div className="fixed z-50 top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-8 rounded-lg flex flex-col items-center">
          <CircularProgress className="animate-spin rounded-full h-16 w-16  mb-4" />

          <p className="text-lg font-semibold">Generating Banner...</p>
          <p className="text-sm text-gray-500 text-center mt-2">
            Please do not refresh the page or close the tab.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-[100%] h-fit max-h-[30vh] sm:max-h-[70vh] pb-[10vh] flex justify-center items-center">
      {transformedImageUrl && (
        <img
          src={transformedImageUrl}
          alt={title}
          style={displayed ? { display: "none" } : { display: "block" }}
          className="object-contain w-[100%] max-h-[25vh] h-[60vh] sm:max-h-[60vh]"
          onLoad={handleImageLoad}
        />
      )}
      {displayed && (
        <div
          className="absolute animate-pulse rounded-md bg-[#F5F5F5] flex flex-col justify-center items-center
        h-[200px] sm:h-[400px] w-full 
        
        "
        >
          <CircularProgress className="animate-spin rounded-full h-16 w-16 mb-4" />
          {/* <p className="text-2xl text-gray-600">Generating Banner...</p> */}
        </div>
      )}
      {!displayed && (
        <button
          onClick={handleDownloadTransformed}
          className="newsletterbtn w-full absolute -bottom-2 left-1/2 -translate-x-1/2 bg-black/30 text-white p-2 rounded-md"
        >
          Download Poster
        </button>
      )}
    </div>
  );
}

export default ImageDownloadPage;

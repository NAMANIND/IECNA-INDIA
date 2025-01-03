"use client";

import React, { use, useEffect, useState } from "react";
import fileDownload from "js-file-download";
import axios from "axios";
import { firestore } from "../../../firbase/clientApp";

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
          )}/fl_layer_apply,x_0,y_360/ckopw19sk9zifzueh18k.jpg`;

        setTransformedImageUrl(transformedImageUrl);
      } else {
        const transformedImageUrl =
          `https://res.cloudinary.com/dmedpnbvc/image/upload/` +
          `l_iecna_upload_india:${overlayParam}/fl_layer_apply,ar_1.0,c_lfill,w_352,h_352,x_0,y_-2,r_max/c_scale/co_rgb:FFFFFF,l_text:arial_42_bold_normal_left:${encodeURIComponent(
            title
          )}/fl_layer_apply,x_0,y_270/co_rgb:FFFFFF,l_text:arial_28_normal_left:${encodeURIComponent(
            company
          )}/fl_layer_apply,x_0,y_320/ckopw19sk9zifzueh18k.jpg`;

        setTransformedImageUrl(transformedImageUrl);
      }
    }

    if (category == "delegate") {
      if (field === "marketer") {
        const transformedImageUrl =
          `https://res.cloudinary.com/dmedpnbvc/image/upload/` +
          `l_iecna_upload_india:${overlayParam}/fl_layer_apply,ar_1.0,c_lfill,w_352,h_352,x_0,y_-2,r_max/c_scale/co_rgb:FFFFFF,l_text:arial_42_bold_normal_left:${encodeURIComponent(
            title
          )}/fl_layer_apply,x_0,y_270/co_rgb:FFFFFF,l_text:arial_28_normal_left:${encodeURIComponent(
            company
          )}/fl_layer_apply,x_0,y_320/co_rgb:FFFFFF,l_text:arial_28_normal_left:${encodeURIComponent(
            marco
          )}/fl_layer_apply,x_0,y_360/iirsamzzw1qfrag8dhjf.jpg`;

        setTransformedImageUrl(transformedImageUrl);
      } else {
        const transformedImageUrl =
          `https://res.cloudinary.com/dmedpnbvc/image/upload/` +
          `l_iecna_upload_india:${overlayParam}/fl_layer_apply,ar_1.0,c_lfill,w_352,h_352,x_0,y_-2,r_max/c_scale/co_rgb:FFFFFF,l_text:arial_42_bold_normal_left:${encodeURIComponent(
            title
          )}/fl_layer_apply,x_0,y_270/co_rgb:FFFFFF,l_text:arial_28_normal_left:${encodeURIComponent(
            company
          )}/fl_layer_apply,x_0,y_320/iirsamzzw1qfrag8dhjf.jpg`;

        setTransformedImageUrl(transformedImageUrl);
      }
    }

    if (category === "nomination") {
      if (field === "marketer") {
        const transformedImageUrl =
          `https://res.cloudinary.com/dmedpnbvc/image/upload/` +
          `l_iecna_upload_india:${overlayParam}/fl_layer_apply,ar_1.0,c_lfill,w_255,h_255,x_0,y_55,r_max/c_scale/co_rgb:FFFFFF,l_text:arial_38_bold_normal_left:${encodeURIComponent(
            title
          )}/fl_layer_apply,x_0,y_350/ntgqq5e6s37tamyux4io.jpg`;

        setTransformedImageUrl(transformedImageUrl);
      } else {
        const transformedImageUrl =
          `https://res.cloudinary.com/dmedpnbvc/image/upload/` +
          `l_iecna_upload_india:${overlayParam}/fl_layer_apply,ar_1.0,c_lfill,w_255,h_255,x_0,y_55,r_max/c_scale/co_rgb:FFFFFF,l_text:arial_38_bold_normal_left:${encodeURIComponent(
            title
          )}/fl_layer_apply,x_0,y_350/ntgqq5e6s37tamyux4io.jpg`;

        setTransformedImageUrl(transformedImageUrl);
      }
    }
  };

  const handleImageLoad = () => {
    // Call your function here after the image has loaded
    console.log("Transformed image loaded!");
    if (transformedImageUrl !== null) {
      const trfRef = firestore.collection("transformed-images");
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

  return (
    <div className=" relative w-[100%] h-fit  max-h-[30vh] sm:max-h-[70vh] pb-[10vh]  justify-center items-center gap-4">
      {transformedImageUrl && (
        <img
          src={transformedImageUrl}
          alt={title}
          className={`object-contain w-[100%] max-h-[25vh] h-[60vh] sm:max-h-[60vh]`}
          onLoad={handleImageLoad} // Call handleImageLoad function when the image is loaded
        />
      )}

      <button
        onClick={handleDownloadTransformed}
        className="newsletterbtn w-full absolute -bottom-2 left-1/2 -translate-x-1/2 bg-black/30 text-white p-2 rounded-md"
      >
        Download Poster
      </button>
    </div>
  );
}

export default ImageDownloadPage;

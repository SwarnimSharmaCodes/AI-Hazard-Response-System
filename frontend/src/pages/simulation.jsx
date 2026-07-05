import { useState } from "react";
import "../styles/pages.css";
import { analyzeImage } from "../services/api";

function Simulation() {
    const [preview, setPreview] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);

     const handleImageChange = (event) => {

        const file = event.target.files[0];
        setSelectedImage(file);


        if (!file) return;

        const imageURL = URL.createObjectURL(file);

        setPreview(imageURL);

    };

    const handleAnalyze = async () => {
    if (!selectedImage) {
        alert("Please upload an image first.");
        return;
    }

    try {
        setLoading(true);

        const formData = new FormData();
        formData.append("image", selectedImage);

        const data = await analyzeImage(formData);

        setResult(data);
    } catch (error) {
        console.error(error);
        alert("Analysis failed.");
    } finally {
        setLoading(false);
    }
};

  return (
    <section className="simulation-page">

      <h1>Industrial Hazard Analysis</h1>

      <p>
        Upload an industrial hazard image for AI-powered analysis.
      </p>

      <div className="upload-box">

        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />

      </div>

      {
                preview && (

                    <div className="preview-container">

                        <h3>Image Preview</h3>

                        <img
                            src={preview}
                            alt="Preview"
                            className="preview-image"
                        />

                    </div>

                )
            }

      <button className="analyze-btn">
        Analyze Hazard
      </button>

    </section>
  );
}

export default Simulation;
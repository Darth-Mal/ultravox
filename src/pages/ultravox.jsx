import React, { useState, useEffect } from "react";
import RecordVoiceOverOutlinedIcon from "@mui/icons-material/RecordVoiceOverOutlined";
import SettingsPhoneOutlinedIcon from "@mui/icons-material/SettingsPhoneOutlined";
import TranslateOutlinedIcon from "@mui/icons-material/TranslateOutlined";
import ExtensionOutlinedIcon from "@mui/icons-material/ExtensionOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

const Ultravox = () => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prev) => (prev < 100 ? prev + 1 : 0));
    }, 10); // Updates every 10ms to complete in 1 second

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <header>
        <div className="navbar">
          {" "}
          <h3>ULTRAVOX</h3>
        </div>
      </header>

      <div className="page-1 page">
        <div className="page-1-title">
          <h1 className="h1">
            Build AI voice agents that communicate like we do
          </h1>
          {/* <p>
            Cutting-edge AI speech for <strong>5¢ per minute.</strong> Create
            and deploy highly effective and natural Voice Agents in no time.
          </p> */}
          <div className="get-started-container">
            <button className="get-started">Get Started</button>
            {/* <p>Free to get started</p> */}
          </div>
        </div>
        <video className="tech-video" autoPlay muted loop playsInline>
          <source src="neww.webm" type="video/webm" />
        </video>
        {/* <div className="tryitout-container">
          <div className="tryitout-header">
            <p>TRY IT OUT</p>
            <p>ver 0.41</p>
          </div>
          <div className="tryout-body">
            <h2>Learn more about Ultravox by talking to it.</h2>
            <div className="tryout-container">
              {" "}
              <button>Try a demo</button>
              <p>or call 1 844-741-5700</p>{" "}
            </div>
          </div>
        </div> */}
      </div>

      <div className="page-2 page">
        <h1>The future of AI speech is here</h1>
        <p className="sub-text">
          Ultravox is an open-weight Speech Language Model (SLM) trained to
          understand speech naturally, just like humans.
        </p>

        <div className="page-2-cards">
          <div className="cards card-1">
            <RecordVoiceOverOutlinedIcon style={{ fontSize: "3em" }} />
            <h2>Beyond Speech Recognition</h2>
            <p>
              Ultravox is an advanced LLM that processes speech directly,
              without conversion to text. This enables much more natural and
              fluid conversations.
            </p>
          </div>
          <div className="cards card-2">
            <SettingsPhoneOutlinedIcon style={{ fontSize: "3em" }} />
            <h2>Web or VoIP Ready</h2>
            <p>
              Seamlessly integrate Ultravox into your web, native app, or
              phone-based products with minimal effort. It comes with SDKs for
              all major languages and built-in Twilio support.
            </p>
          </div>
          <div className="cards card-3">
            <TranslateOutlinedIcon style={{ fontSize: "3em" }} />
            <h2>Multi-lingual by default</h2>
            <p>
              Ultravox is fluent in all major languages, and easily adaptable
              support new languages or accents, ensuring smooth communication
              across diverse audiences.
            </p>
          </div>
          <div className="cards card-4">
            <ExtensionOutlinedIcon style={{ fontSize: "3em" }} />
            <h2>BYOM (Bring Your Own Model)</h2>
            <p>
              Ultravox gives you the flexibility to work with any open-source
              model, even your own fine-tuned models.
            </p>
          </div>
        </div>
      </div>

      <div className="page-3 page">
        <h1>Fast, accurate, smart. Pick three</h1>
        <p className="sub-text">
          Unlike other voice-based systems, Ultravox integrates speech
          recognition directly, without relying on transforming speech into
          text. This makes Ultravox faster, more reliable, and more natural.
        </p>

        <div className="page-3-body">
          <div className="descriptions">
            <div className="desc-1">
              <div className="circle-container">
                <svg width="100" height="100" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="tomato"
                    strokeWidth="5"
                    strokeDasharray="282.6" /* Circumference of the circle */
                    strokeDashoffset={282.6 - (282.6 * percentage) / 100}
                    className="circle"
                  />
                  <text
                    x="50%"
                    y="50%"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    fontSize="18"
                    fill="#fff"
                  >
                    {percentage <= 100 ? `${percentage}%` : ""}
                  </text>
                </svg>
              </div>
              <div className="desc-body">
                <p>
                  {" "}
                  <strong> Ultravox</strong>
                </p>
                <p>
                  Understanding speech directly means there are fewer moving
                  parts. This means much faster and much more consistent
                  response times than the Legacy Component System.
                </p>
              </div>
            </div>
            <div className="desc-1">
              <div className="circle-container">
                {/* Second Circle - Quadrant Animation */}
                <svg
                  width="100"
                  height="100"
                  viewBox="0 0 100 100"
                  strokeDasharray="70.65 4.35" /* Each quadrant with spacing between */
                  className="quadrant-circle"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="aliceblue"
                    strokeWidth="5"
                    strokeDasharray="282.6" /* Full circumference of the circle */
                    strokeDashoffset={
                      282.6 - (282.6 * percentage) / 25
                    } /* Divides circle into 4 quadrants */
                    className="quadrant-circle"
                  />

                  <text
                    x="50%"
                    y="50%"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    fontSize="18"
                    fill="#fff"
                  >
                    {percentage <= 100 ? `${percentage}%` : ""}
                  </text>
                </svg>
              </div>
              <div className="desc-body">
                <p>
                  {" "}
                  <strong> Legacy Component Systems</strong>
                </p>
                <p>
                  The current industry standard is a cascaded pipeline of
                  services strung together to give the illusion of a seamless
                  experience. This means it's slower, more brittle, and unable
                  to capture the nuances of human speech.
                </p>
              </div>
            </div>
          </div>

          <div className="benchmark">
            <h4>BENCHMARKS</h4>
            <h3>CoVoST2 Translation</h3>
            <p>
              Our primary method of evaluation is zero-shot speech translation,
              measured by BLEU, as a proxy or general instruction-following
              capability (the higher the number the better)
            </p>
            <div className="benchmarks">
              <div className="benchmark-1 bnchmrk">
                <div className="top">
                  <p>Ultravox 0.4.1 Llama 3.1 70B</p>
                  <p>38.97</p>
                </div>
                <div className="benchmark-bar-1">
                  <div
                    className="benchmarker"
                    style={{
                      height: "100%",
                      background:
                        "linear-gradient(225deg, rgb(255, 195, 113) 0%, rgb(255, 147, 111) 33.3333%, rgb(255, 95, 109) 66.6667%, rgb(221, 69, 88) 100%)",

                      width: "78%",
                    }}
                  ></div>
                </div>
              </div>
              <div className="benchmark-2 bnchmrk">
                <div className="top">
                  <p>GPT-4o Realtime</p>
                  <p>40.35</p>
                </div>
                <div className="benchmark-bar-2">
                  <div
                    className="benchmarker"
                    style={{
                      height: "100%",
                      backgroundColor: " rgba(240, 248, 255, 0.5)",
                      width: "81%",
                    }}
                  ></div>
                </div>
              </div>{" "}
              <div className="benchmark-3 bnchmrk">
                <div className="top">
                  <p>Ultravox 0.4.1 Llama 3.1 8B</p>
                  <p>33.97</p>
                </div>
                <div className="benchmark-bar-3">
                  <div
                    className="benchmarker"
                    style={{
                      height: "100%",
                      background:
                        "linear-gradient(225deg, rgb(255, 195, 113) 0%, rgb(255, 147, 111) 33.3333%, rgb(255, 95, 109) 66.6667%, rgb(221, 69, 88) 100%)",

                      width: "68%",
                    }}
                  ></div>
                </div>
              </div>{" "}
              <div className="benchmark-4 bnchmrk">
                <div className="top">
                  <p>Ultravox 0.4.1 Mistral NeMo (12B)</p>
                  <p>33.59</p>
                </div>
                <div className="benchmark-bar-4">
                  <div
                    className="benchmarker"
                    style={{
                      height: "100%",
                      background:
                        "linear-gradient(225deg, rgb(255, 195, 113) 0%, rgb(255, 147, 111) 33.3333%, rgb(255, 95, 109) 66.6667%, rgb(221, 69, 88) 100%)",

                      width: "67%",
                    }}
                  ></div>
                </div>
              </div>{" "}
              <div className="benchmark-5 bnchmrk">
                <div className="top">
                  <p>Qwen2-Audio- 7B-Instruct</p>
                  <p>28.43</p>
                </div>
                <div className="benchmark-bar-5">
                  <div
                    className="benchmarker"
                    style={{
                      height: "100%",
                      backgroundColor: " rgba(240, 248, 255, 0.5)",
                      width: "57%",
                    }}
                  ></div>
                </div>
              </div>{" "}
              <div className="benchmark-6 bnchmrk">
                <div className="top">
                  <p>ICTNLP Llama-Omni Llama 3.1 8B</p>
                  <p>6.61</p>
                </div>
                <div className="benchmark-bar-6">
                  <div
                    className="benchmarker"
                    style={{
                      height: "100%",
                      backgroundColor: " rgba(240, 248, 255, 0.5)",
                      width: "13%",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="page4and5">
        <div className="page-4 page">
          <div className="page-4-vid">
            <video className="box-video" autoPlay muted loop playsInline>
              <source
                src="rBFbhC3XXYalVYHQjoK7KyfwXWE.webm"
                type="video/webm"
              />
            </video>
          </div>
          <div className="page4-text">
            <div className="page-4-title">
              <h1>Customize it, then run it anywhere</h1>
              <h2>(even on-prem)</h2>
              <p>
                Whether it's adding support for additional languages,
                fine-tuning on your own datasets, or creating unique and custom
                voices — Ultravox can be fully customized to your needs.
                Ultravox can also be deployed directly in your own cloud.
              </p>
              <div className="get-started-container">
                <button className="get-started">Get in touch</button>
              </div>
            </div>
          </div>
        </div>

        <div className="page-5">
          <h1>All the basics, plus some </h1>
          {/* <h3>for just 5₵/minute</h3> */}

          <div className="attributes">
            <div className="attr">
              <div className="attr-emoji">
                <SettingsOutlinedIcon />
              </div>
              <p>Function Calling</p>
            </div>
            <div className="attr">
              <div className="attr-emoji">
                <SettingsOutlinedIcon />
              </div>
              <p>Function Calling</p>
            </div>{" "}
            <div className="attr">
              <div className="attr-emoji">
                <SettingsOutlinedIcon />
              </div>
              <p>Function Calling</p>
            </div>{" "}
            <div className="attr">
              <div className="attr-emoji">
                <SettingsOutlinedIcon />
              </div>
              <p>Function Calling</p>
            </div>{" "}
            <div className="attr">
              <div className="attr-emoji">
                <SettingsOutlinedIcon />
              </div>
              <p>Function Calling</p>
            </div>{" "}
            <div className="attr">
              <div className="attr-emoji">
                <SettingsOutlinedIcon />
              </div>
              <p>Function Calling</p>
            </div>{" "}
            <div className="attr">
              <div className="attr-emoji">
                <SettingsOutlinedIcon />
              </div>
              <p>Function Calling</p>
            </div>{" "}
            <div className="attr">
              <div className="attr-emoji">
                <SettingsOutlinedIcon />
              </div>
              <p>Function Calling</p>
            </div>{" "}
            <div className="attr">
              <div className="attr-emoji">
                <SettingsOutlinedIcon />
              </div>
              <p>Function Calling</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ultravox;

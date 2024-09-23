export default function AvatarBannerGuidelines() {
  return (
    <article className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">
        Banner Design Contest: Rules and Guidelines
      </h1>

      {/* Rules and Guidelines Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Rules and Guidelines</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            <strong>Banner Specifications:</strong>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Size:</strong> Banners must measure 2 ft x 4 ft and be
                oriented horizontally.
              </li>
              <li>
                <strong>Materials:</strong> Only sustainable and eco-friendly
                materials such as recycled paper, fabric, and repurposed items
                are allowed.
              </li>
              <li>
                <strong>Content:</strong> The design must creatively represent
                the group name and align with the overall theme of Ready Player
                One.
              </li>
            </ul>
          </li>

          <li>
            <strong>Submission Details:</strong>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Image Submission:</strong> All banners must be submitted
                as a JPEG or PNG image file through the designated Google Form
                provided.
                <br />
                <a
                  href="https://forms.gle/3MyCMxeyEPUzhgpS8"
                  target="_blank"
                  className="text-blue-600 underline"
                >
                  Google Form Link
                </a>
              </li>
              <li>
                <strong>Description:</strong> Each submission must accompany a
                short description (100-150 words) explaining the materials used
                and how the design reflects the group name and theme.
              </li>
              <li>
                <strong>Submission Deadline:</strong> No later than 11:59 PM on
                September 24, 2024.
              </li>
              <li>
                <strong>Banner Authenticity:</strong> The banner in the
                submitted image must be the same as that used during the event.
              </li>
            </ul>
          </li>

          <li>
            <strong>Judging and Scoring:</strong>
            <ul className="list-disc pl-6 space-y-2">
              <li>Banners will be judged based on the criteria provided.</li>
              <li>The judges’ decisions are final.</li>
              <li>
                Teams must ensure their banners are free from vulgar, offensive,
                or inappropriate language. Violations will result in a deduction
                of 1 point from the overall score.
              </li>
            </ul>
          </li>

          <li>
            <strong>Late Submissions:</strong> Late submissions will not be
            accepted under any circumstances.
          </li>
        </ol>
      </section>

      {/* Criteria for Judging Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Criteria for Judging</h2>
        {/* Insert criteria for judging here as needed */}
        <p className="pl-6">
          The judging criteria will be based on creativity, use of sustainable
          materials, relevance to the theme, and overall presentation.
        </p>
      </section>
    </article>
  );
}

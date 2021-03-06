# Read me

This project is recreation of the [signature app](https://temp-cr-eu-email-signature.s3.eu-west-2.amazonaws.com/index.html?region=eu&marketing=none) with NextJS. The aims are:

1. To keep the implementation as lean as possible โก๏ธ
2. Include tests ๐งช to increase product confidence ๐ฏ
3. Learn ๐ and show off ๐

## For development

1. Create a `feature` branch
2. Run `npm run dev`
3. Run `npm run test` for tests

## For production

When ready to deploy to production:

1. In your `feature` branch export the static app with `npm run build`. This should build the app in `docs` folder - naming is used in [GitHub pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#choosing-a-publishing-source).
2. Commit and push to remote.
3. Raise a PR of `feature` branch against the `main`.
4. Once merged this will trigger a push to `main` and will kick-off a deployment of pages (see the **Actions** tab).
5. Once deployed changes should be [available to view](https://kasalyas.github.io/next-signature/).

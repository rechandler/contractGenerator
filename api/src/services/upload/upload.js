// var admin = require("firebase-admin");
const {Storage} = require('@google-cloud/storage');
const storage = new Storage();

import { requireAuth } from 'src/lib/auth'

export const getSignedUrl = async ({ filename }) => {
  // requireAuth();

  // const serviceAccount = JSON.parse(JSON.stringify({
  //   type: process.env['firebase_type'],
  //   project_id: process.env['firebase_project_id'],
  //   private_key_id: process.env['firebase_private_key_id'],
  //   private_key: Buffer.from(process.env['firebase_private_key'], 'base64').toString(),
  //   client_email: process.env['firebase_client_email'],
  //   client_id: process.env['firebase_client_id'],
  //   auth_uri: process.env['firebase_auth_uri'],
  //   token_uri: process.env['firebase_token_uri'],
  //   auth_provider_x509_cert_url: process.env['firebase_auth_provider_x509_cert_url'],
  //   client_x509_cert_url: process.env['firebase_client_x509_cert_url']
  // }))

  // if (!admin.apps.length) {
  //   admin.initializeApp({
  //     credential: admin.credential.cert(serviceAccount),
  //     storageBucket: 'gs://contractmanagement-f7167.appspot.com/'
  //   });
  // }

  // // make this dynamic
  // const bucketName = 'default'

  // const [signedUrl] = await admin.storage()
  //   .bucket(bucketName)
  //   .file(filename)
  //   .getSignedUrl({
  //     version: 'v4',
  //     action: 'write',
  //     virtualHostedStyle: true,
  //     extensionHeaders: {
  //       'Content-Type': 'image/png'
  //     },
  //     expires: Date.now() + 5 * 60 * 1000, // 5 minutes
  //   });

  const options = {
    version: 'v4',
    action: 'write',
    virtualHostedStyle: true,
    extensionHeaders: {
      'content-type': 'image/png'
    },
    expires: Date.now() + 5 * 60 * 1000, // 5 minutes
};

  const bucketName = 'contract_management_dev'
  const [signedUrl] = await storage
    .bucket(bucketName)
    .file(filename)
    .getSignedUrl(options);

    return { signedUrl };
}

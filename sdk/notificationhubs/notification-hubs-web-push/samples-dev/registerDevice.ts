// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  WebPushClientContext,
  addTags,
  createClientContext,
  getInstallation,
  removeTags,
} from "@azure/notification-hubs-web-push";

// Top Level Push Info
let endpoint: string = "";
let p256dh: string = "";
let auth: string = "";
let installationId: string = "";

// Tags management
let tags: string[] = [];
let tagToAdd = "";

const CONNECTION_STRING = "";
const HUB_NAME = "";
const VAPID_PUBLIC_KEY = "";

let clientContext: WebPushClientContext;

async function registerWebPush() {
  clientContext = createClientContext(CONNECTION_STRING, HUB_NAME);

  const installation = await getInstallation(clientContext, VAPID_PUBLIC_KEY, {
    serviceWorkerUrl: "service-worker.js",
  });
  endpoint = installation.pushChannel.endpoint;
  p256dh = installation.pushChannel.p256dh;
  auth = installation.pushChannel.auth;
  installationId = installation.installationId;
}

async function addTagToList() {
  if (!clientContext) {
    return;
  }

  await addTags(clientContext, [tagToAdd]);

  tags = [...tags, tagToAdd];
  tagToAdd = "";
}

async function removeTag(tag: string) {
  if (!clientContext) {
    return;
  }

  await removeTags(clientContext, [tag]);

  tags = tags.filter((t) => t !== tag);
}

registerWebPush()
  .then(async () => {
    // Log the details
    console.log("Endpoint: ", endpoint);
    console.log("P256DH: ", p256dh);
    console.log("Auth: ", auth);
    console.log("Installation ID: ", installationId);

    // Add tags
    tagToAdd = "likes_hockey";
    await addTagToList();

    // Remove tags
    await removeTag("likes_hockey");
  })
  .catch((e) => {
    console.log("Error Web Push Sample: ", e);
  });

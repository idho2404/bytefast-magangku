import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";

// Import FontAwesome core
import { library } from "@fortawesome/fontawesome-svg-core";

// Import specific icons from the packs you installed
import {
	faEye,
	faImage,
	faFileUpload,
	faFileExcel,
	faFilePdf,
	faFileCsv,
	faDatabase,
	faCloudUploadAlt, // Import the cloud-upload-alt icon
} from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { faVuejs } from "@fortawesome/free-brands-svg-icons";

// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Import your styles
import "./style.css";
import "./assets/tailwind.css";

// Add icons to the library
library.add(
	faEye,
	faImage,
	faFileUpload,
	faFileExcel,
	faFilePdf,
	faFileCsv,
	faDatabase,
	faCloudUploadAlt, // Add the cloud-upload-alt icon to the library
	faCircle,
	faVuejs
);

// Create the Vue app
const app = createApp(App);

// Register the FontAwesomeIcon component globally
app.component("font-awesome-icon", FontAwesomeIcon);

// Use the router
app.use(router);

// Mount the app
app.mount("#app");

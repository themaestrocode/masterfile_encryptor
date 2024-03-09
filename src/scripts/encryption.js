import { encryptFile, encryptText, downloadSection } from "./file.js";

export function renderEncryptionHTML(formSection) {
   downloadSection.innerHTML = "";

   formSection.innerHTML = `
      <form class="encryption-form js-encryption-form" enctype="multipart/form-data">
         <label for="file">Select File</label><br>
         <input class="selected-file js-selected-file" type="file" name="file" required><br>

         <label for="encryptionKey">Encrypt with a key</label><br>
         <input class="encryption-key js-encryption-key" type="password" name="encryptionKey" placeholder="encryption key" required><br>

         <label for="encryptionKey2">Enter the key again</label><br>
         <input class="encryption-key2 js-encryption-key2" type="password" name="encryptionKey2" placeholder="confirm encryption key" required><br>

         <div class="feo-section">
            Choose file extension
            <select class="feo js-feo">
               <option selected value="original">original</option>
               <option value="enc">.enc</option>
            </select>
         </div>
         <button class="encrypt-button js-encrypt-button" type="submit">Encrypt file</button>
      </form>
   `;

   document.querySelector(".js-encryption-form").addEventListener("submit", (event) => {
      event.preventDefault();

      const selectedFile = document.querySelector(".js-selected-file");
      const encryptionKey = document.querySelector(".js-encryption-key");
      const encryptionKey2 = document.querySelector(".js-encryption-key2");

      encryptFile(selectedFile.files[0], encryptionKey.value, encryptionKey2.value);

      encryptionKey.value = "";
      encryptionKey2.value = "";
   });
}

export function renderTextEncryptionHTML(formSection) {
   downloadSection.innerHTML = "";

   formSection.innerHTML = `
      <form class="encryption-form js-encryption-form">
         <label for="text">Enter text</label><br>
         <textarea class="text-input js-text-input" name="text" placeholder="Type or paste your text here" required></textarea><br>

         <label for="encryptionKey">Encrypt with a key</label><br>
         <input class="encryption-key js-encryption-key" type="password" name="encryptionKey" placeholder="encryption key" required><br>

         <label for="encryptionKey2">Enter the key again</label><br>
         <input class="encryption-key2 js-encryption-key2" type="password" name="encryptionKey2" placeholder="confirm encryption key" required><br>

         <button class="encrypt-button js-encrypt-button" type="submit">Encrypt text</button>
      </form>
   `;

   document.querySelector(".js-encryption-form").addEventListener("submit", (event) => {
      event.preventDefault();

      const text = document.querySelector(".js-text-input");
      const encryptionKey = document.querySelector(".js-encryption-key");
      const encryptionKey2 = document.querySelector(".js-encryption-key2");

      encryptText(text.value, encryptionKey.value, encryptionKey2.value);

      encryptionKey.value = "";
      encryptionKey2.value = "";
   });
}

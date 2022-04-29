// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    case 'APACHE':
        return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    case 'GPL':
          return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
    case 'BSD':
      return `[![License: BSD](https://img.shields.io/badge/License-BSD-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
    case 'MPL':
        return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
    case 'CDDL':
          return `[![License: CDDL](https://img.shields.io/badge/License-CDDL-blue.svg)](https://opensource.org/licenses/CDDL-1.0)`;
    case 'EPL':
      return `[![License](https://img.shields.io/badge/License-EPL-blue.svg)](https://www.eclipse.org/legal/epl-2.0/)`;
    case 'None':
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {

    case 'MIT':
      return `Copyright ${data.year} ${data.name}

      Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
      
      The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
      
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`
    case 'APACHE':
      return ` Copyright ${data.year} ${data.name}

      Licensed under the Apache License, Version 2.0 (the "License");
      you may not use this file except in compliance with the License.
      You may obtain a copy of the License at
   
        http://www.apache.org/licenses/LICENSE-2.0
   
      Unless required by applicable law or agreed to in writing, software
      distributed under the License is distributed on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      See the License for the specific language governing permissions and
      limitations under the License.`
    case 'GPL':
      return `Copyright (C) ${data.year} ${data.name}
      This program comes with ABSOLUTELY NO WARRANTY; for details type 'show w'.
      This is free software, and you are welcome to redistribute it
      under certain conditions; type 'show c' for details.`
    case 'BSD':
      return `Copyright ${data.year} ${data.name}

      Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
      
      1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
      
      2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
      
      3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
      
      THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.`;
    case 'MPL':
      return `This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0. If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.`
    case 'CDDL':
      return `Common Development and Distribution License 1.0
      A simple permissive license only requiring preservation of copyright and license notices for
      source (and not binary) distribution. Licensed works, modifications, and larger works may be 
      distributed under different terms and without source code.`
    case 'MPL':
      return `Mozilla Public License 2.0
        Permissions of this weak copyleft license are conditioned on making available source code of
        licensed files and modifications of those files under the same license (or in certain cases,
        one of the GNU licenses). Copyright and license notices must be preserved. Contributors
        provide an express grant of patent rights. However, a larger work using the licensed work
        may be distributed under different terms and without source code for files added in the 
        larger work.`
    case 'No License':
      return ''  

  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let output = `
  # ${data.title}
  ![License Badge](https://img.shields.io/badge/License-${data.license}-green.svg)
  ## Description
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Test](#test)
  * [Questions](#questions)
  * [Credits](#credits)
  * [License](#license)
  ## Installation
  - ${data.installation}
  ## Usage
  ${data.usage}
  ## Contributors
  - ${data.contributing}
  ## Website
  ${data.website}
  ## Tests
  - ${data.test}
  ## Questions
  For additional information you can reach out at either ${data.email} or ${data.github}.
  ## License
  Licensed under the ${data.license} license.
`;
}

module.exports = generateMarkdown;

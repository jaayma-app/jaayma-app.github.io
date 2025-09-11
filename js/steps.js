// Steps data with actual content from help.html
        const stepsData = {
            'create-package': {
                title: 'create-package',
                subtitle: 'create-package-desc',
                steps: [
                    "create-package-step1",
                    "create-package-step2",
                    "create-package-step3",
                    "create-package-step4",
                    "create-package-step5",
                ],
                videoUrl: 'https://www.youtube.com/embed/GDJIujgRkLc'
            },
            'place-order': {
                title: 'place-order',
                subtitle: 'place-order-desc',
                steps: [
                    "place-order-step1",
                    "place-order-step2",
                    "place-order-step3",
                    "place-order-step4",
                ],
                videoUrl: 'https://www.youtube.com/embed/example-video-2'
            },
            'perform-paytech-payments': {
                title: 'perform-paytech-payments',
                subtitle: 'perform-paytech-payments-desc',
                steps: [
                    "perform-payments-step1",
                    "perform-payments-step2",
                    "perform-payments-step3",
                    "perform-payments-step4",
                    "perform-payments-step5",
                    "perform-payments-step6",
                ],
                videoUrl: 'https://www.youtube.com/embed/example-video-3'
            },
            'perform-paypal-payments': {
                title: 'perform-paypal-payments',
                subtitle: 'perform-paypal-payments-desc',
                steps: [
                    "perform-payments-step1",
                    "perform-payments-step2",
                    "perform-payments-step3",
                    "perform-payments-step4",
                    "perform-payments-step5",
                    "perform-payments-step6",
                ],
                videoUrl: 'https://www.youtube.com/embed/example-video-3'
            },
            'buyer-referral-program': {
                title: 'buyer-referral-program',
                subtitle: 'buyer-referral-program-desc',
                steps: [
                    "perform-payments-step1",
                    "perform-payments-step2",
                    "perform-payments-step3",
                    "perform-payments-step4",
                    "perform-payments-step5",
                    "perform-payments-step6",
                ],
                videoUrl: 'https://www.youtube.com/embed/example-video-3'
            },
            'add-items': {
                title: 'add-items',
                subtitle: 'add-items-desc',
                steps: [
                    "add-items-step1",
                    "add-items-step2",
                    "add-items-step3",
                    "add-items-step4",
                    "add-items-step5",
                ],
                videoUrl: 'https://www.youtube.com/embed/example-video-4'
            },
            'manage-orders': {
                title: 'manage-orders',
                subtitle: 'manage-orders-desc',
                steps: [
                    "manage-orders-step1",
                    "manage-orders-step2",
                    "manage-orders-step3",
                    "manage-orders-step4",
                    "manage-orders-step5",
                    "manage-orders-step6",
                ],
                videoUrl: 'https://www.youtube.com/embed/example-video-5'
            },
            'paytech-upload-auth': {
                title: 'paytech-upload-auth',
                subtitle: 'paytech-upload-auth-desc',
                steps: [
                    "upload-auth-step1",
                    "upload-auth-step2",
                    "upload-auth-step3",
                    "upload-auth-step4",
                    "upload-auth-step5",
                    "upload-auth-step6",
                ],
                videoUrl: 'https://www.youtube.com/embed/example-video-6'
            },
            'paypal-upload-auth': {
                title: 'paypal-upload-auth',
                subtitle: 'paypal-upload-auth-desc',
                steps: [
                    "upload-auth-step1",
                    "upload-auth-step2",
                    "upload-auth-step3",
                    "upload-auth-step4",
                    "upload-auth-step5",
                    "upload-auth-step6",
                ],
                videoUrl: 'https://www.youtube.com/embed/example-video-6'
            },
            'seller-referral-program': {
                title: 'seller-referral-program',
                subtitle: 'seller-referral-program-desc',
                steps: [
                    "perform-payments-step1",
                    "perform-payments-step2",
                    "perform-payments-step3",
                    "perform-payments-step4",
                    "perform-payments-step5",
                    "perform-payments-step6",
                ],
                videoUrl: 'https://www.youtube.com/embed/example-video-3'
            },
            'apply-orders': {
                title: 'apply-orders',
                subtitle: 'apply-orders-desc',
                steps: [
                    "apply-orders-step1",
                    "apply-orders-step2",
                    "apply-orders-step3",
                    "apply-orders-step4",
                    "apply-orders-step5",
                    "apply-orders-step6",
                ],
                videoUrl: 'https://www.youtube.com/embed/example-video-8'
            },
            'perform-deliveries': {
                title: 'perform-deliveries',
                subtitle: 'perform-deliveries-desc',
                steps: [
                    "perform-deliveries-step1",
                    "perform-deliveries-step2",
                    "perform-deliveries-step3",
                    "perform-deliveries-step4",
                    "perform-deliveries-step5",
                    "perform-deliveries-step6",
                ],
                videoUrl: 'https://www.youtube.com/embed/example-video-9'
            },
            'deliverer-payment': {
                title: 'deliverer-payment',
                subtitle: 'deliverer-payment-desc',
                steps: [
                    "deliverer-payment-step1",
                    "deliverer-payment-step2",
                    "deliverer-payment-step3",
                    "deliverer-payment-step4",
                    "deliverer-payment-step5",
                    "deliverer-payment-step6",
                ],
                videoUrl: 'https://www.youtube.com/embed/example-video-10'
            }
        };

        // Function to get URL parameter
        function getUrlParameter(name) {
            name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
            var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
            var results = regex.exec(location.search);
            return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
        }

        // Function to load steps based on parameter
        function loadSteps() {
            const stepType = getUrlParameter('step');
            const stepData = stepsData[stepType];

            if (!stepData) {
                // Show error message if step type not found
                document.getElementById('steps-content').innerHTML = `
                    <div class="error-message">
                        <i class='bx bx-error-circle'></i>
                        <h3 data-lang="steps-not-found">Steps not found</h3>
                        <p data-lang="request-not-found">The requested step guide could not be found.</p>
                        <a href="help.html" class="back-button" data-lang="return">Return to Help Center</a>
                    </div>
                `;
                document.getElementById('video-container').style.display = 'none';
                return;
            }

            // Update title and subtitle with data-lang
            const titleElement = document.getElementById('steps-title');
            const subtitleElement = document.getElementById('steps-subtitle');
            
            titleElement.setAttribute('data-lang', stepData.title);
            subtitleElement.setAttribute('data-lang', stepData.subtitle);

            // Generate steps HTML with data-lang attributes
            let stepsHTML = '<ol class="steps-list">';
            stepData.steps.forEach((stepKey, index) => {
                stepsHTML += `<li data-lang="${stepKey}"></li>`;
            });
            stepsHTML += '</ol>';

            document.getElementById('steps-content').innerHTML = stepsHTML;
            
            // Set video URL
            document.getElementById('tutorial-iframe').src = stepData.videoUrl;
            // Trigger language to apply translations
            applyLanguage();
        }

        // Load steps when page loads
        document.addEventListener('DOMContentLoaded', loadSteps);

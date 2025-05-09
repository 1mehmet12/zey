document.addEventListener('DOMContentLoaded', function() {
    let loginAttempts = 0;
    let initialScenarioComplete = false;

    // Pop-up'ı göster
    window.showPopup = function() {
        const popup = document.getElementById('popup');
        popup.style.display = 'flex';
        setTimeout(() => {
            popup.style.opacity = '1';
            popup.classList.add('active');
        }, 10);
    }

    // Pop-up'ı kapat
    window.closePopup = function() {
        const popup = document.getElementById('popup');
        popup.style.opacity = '0';
        popup.classList.remove('active');
        setTimeout(() => {
            popup.style.display = 'none';
        }, 500);
    }

    // Haha Pop-up'ı göster
    window.showHahaPopup = function() {
        const hahaPopup = document.getElementById('hahaPopup');
        hahaPopup.style.display = 'flex';
        setTimeout(() => {
            hahaPopup.style.opacity = '1';
            hahaPopup.classList.add('active');
        }, 10);
    }

    // Haha Pop-up'ı kapat
    window.closeHahaPopup = function() {
        const hahaPopup = document.getElementById('hahaPopup');
        hahaPopup.style.opacity = '0';
        hahaPopup.classList.remove('active');
        setTimeout(() => {
            hahaPopup.style.display = 'none';
        }, 500);
    }

    // Son Pop-up'ı göster
    window.showNextPopup = function() {
        closeHahaPopup();
        setTimeout(() => {
            const nextPopup = document.getElementById('nextPopup');
            nextPopup.style.display = 'flex';
            setTimeout(() => {
                nextPopup.style.opacity = '1';
                nextPopup.classList.add('active');
            }, 10);
        }, 500);
    }

    // Son Pop-up'ı kapat
    window.closeNextPopup = function() {
        const nextPopup = document.getElementById('nextPopup');
        nextPopup.style.opacity = '0';
        nextPopup.classList.remove('active');
        setTimeout(() => {
            nextPopup.style.display = 'none';
            initialScenarioComplete = true; // İlk senaryo tamamlandı
        }, 500);
    }

    // Uyarı Pop-up'ı göster
    window.showWarningPopup = function() {
        const warningPopup = document.getElementById('warningPopup');
        warningPopup.style.display = 'flex';
        setTimeout(() => {
            warningPopup.style.opacity = '1';
            warningPopup.classList.add('active');
        }, 10);
    }

    // Uyarı Pop-up'ı kapat
    window.closeWarningPopup = function() {
        const warningPopup = document.getElementById('warningPopup');
        warningPopup.style.opacity = '0';
        warningPopup.classList.remove('active');
        setTimeout(() => {
            warningPopup.style.display = 'none';
        }, 500);
    }

    // "Ne oldu olmadı mı?" Pop-up'ı göster
    window.showFailedAttemptPopup = function() {
        const failedPopup = document.getElementById('failedAttemptPopup');
        failedPopup.style.display = 'flex';
        setTimeout(() => {
            failedPopup.style.opacity = '1';
            failedPopup.classList.add('active');
        }, 10);
    }

    // "Ne oldu olmadı mı?" Pop-up'ı kapat
    window.closeFailedAttemptPopup = function() {
        const failedPopup = document.getElementById('failedAttemptPopup');
        failedPopup.style.opacity = '0';
        failedPopup.classList.remove('active');
        setTimeout(() => {
            failedPopup.style.display = 'none';
        }, 500);
    }

    // Kullanıcı Bilgileri Pop-up'ı göster
    window.showCredentialsPopup = function() {
        closeFailedAttemptPopup();
        setTimeout(() => {
            const credentialsPopup = document.getElementById('credentialsPopup');
            credentialsPopup.style.display = 'flex';
            setTimeout(() => {
                credentialsPopup.style.opacity = '1';
                credentialsPopup.classList.add('active');
            }, 10);
        }, 500);
    }

    // Kullanıcı Bilgileri Pop-up'ı kapat
    window.closeCredentialsPopup = function() {
        const credentialsPopup = document.getElementById('credentialsPopup');
        credentialsPopup.style.opacity = '0';
        credentialsPopup.classList.remove('active');
        setTimeout(() => {
            credentialsPopup.style.display = 'none';
        }, 500);
    }

    // Başarılı giriş pop-up'ı göster
    window.showSuccessPopup = function() {
        const successPopup = document.getElementById('successPopup');
        successPopup.style.display = 'flex';
        setTimeout(() => {
            successPopup.style.opacity = '1';
            successPopup.classList.add('active');
        }, 10);
    }

    // Başarılı giriş pop-up'ı kapat ve yönlendir
    window.redirectToSuccess = function() {
        const successPopup = document.getElementById('successPopup');
        const loginSection = document.querySelector('.container');
        const successSection = document.querySelector('.success-section');
        
        // Hide success popup with animation
        successPopup.style.opacity = '0';
        successPopup.classList.remove('active');
        
        setTimeout(() => {
            // Hide success popup completely
            successPopup.style.display = 'none';
            
            // Hide login container with fade out
            loginSection.style.opacity = '0';
            loginSection.style.transition = 'opacity 0.5s ease';
            
            setTimeout(() => {
                // Hide login section completely
                loginSection.style.display = 'none';
                
                // Show and animate success section
                successSection.style.display = 'flex';
                successSection.style.opacity = '0';
                
                setTimeout(() => {
                    successSection.style.opacity = '1';
                    successSection.style.transition = 'opacity 0.5s ease';
                    
                    // Ensure hello text is in initial state
                    const helloText = document.querySelector('.hello-text');
                    if (helloText) {
                        helloText.textContent = 'Merhaba';
                        helloText.classList.add('animated');
                        
                        // Create initial stars
                        createStars();
                        
                        // Start initial timer for text change
                        setTimeout(() => {
                            if (isInitialState) {
                                // Remove bounce animation
                                helloText.classList.remove('animated');
                                
                                // Fade out current text
                                helloText.style.opacity = '0';
                                helloText.style.transition = 'opacity 0.5s ease';
                                
                                setTimeout(() => {
                                    // Change text and fade in
                                    helloText.textContent = 'Hmmm... Sıkıcı oldu değil mi?';
                                    helloText.style.opacity = '1';
                                    
                                    // Make text clickable
                                    helloText.style.cursor = 'pointer';
                                }, 500);
                            }
                        }, 3000);
                    }
                }, 100);
            }, 500);
        }, 500);
    }

    window.checkAndClose = function() {
        const input = document.getElementById('popupInput');
        const inputValue = input.value;
        
        if (inputValue === 'BİLMİYORUM') {
            closePopup();
            setTimeout(() => {
                showHahaPopup();
            }, 500);
        } else {
            input.classList.add('input-shake');
            setTimeout(() => {
                input.classList.remove('input-shake');
            }, 500);
            
            showWarningPopup();
        }
    }

    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const inputs = document.querySelectorAll('.input-group input');
            
            if (username && password) {
                if (!initialScenarioComplete) {
                    showPopup();
                } else {
                    if (username === 'Ben Zeynep' && password === 'mehmet') {
                        // Başarılı giriş
                        showSuccessPopup();
                    } else {
                        loginAttempts++;
                        
                        // Her yanlış girişte farklı efektler
                        switch(loginAttempts) {
                            case 1:
                                // İlk yanlış giriş
                                inputs.forEach(input => {
                                    input.classList.add('input-shake-light');
                                    input.style.borderColor = '#ff6b6b';
                                    setTimeout(() => {
                                        input.classList.remove('input-shake-light');
                                        input.style.borderColor = '#ddd';
                                    }, 1000);
                                });
                                break;
                                
                            case 2:
                                // İkinci yanlış giriş
                                inputs.forEach(input => {
                                    input.classList.add('input-shake-hard');
                                    input.classList.add('input-flash');
                                    setTimeout(() => {
                                        input.classList.remove('input-shake-hard');
                                        input.classList.remove('input-flash');
                                    }, 1000);
                                });
                                break;
                                
                            case 3:
                                // Üçüncü yanlış giriş
                                showFailedAttemptPopup();
                                loginAttempts = 0; // Sayacı sıfırla
                                break;
                        }
                    }
                }
            } else {
                alert('Lütfen kullanıcı adı ve şifre giriniz!');
            }
        });
    }
    
    function setRandomAnimation() {
        const flowers = document.querySelectorAll('.flower');
        const vines = document.querySelectorAll('.vine');
        
        flowers.forEach(flower => {
            const randomDelay = Math.random() * 5;
            const randomDuration = 5 + Math.random() * 5;
            flower.style.animationDelay = `${randomDelay}s`;
            flower.style.animationDuration = `${randomDuration}s`;
        });
        
        vines.forEach(vine => {
            const randomDelay = Math.random() * 3;
            const randomDuration = 4 + Math.random() * 4;
            vine.style.animationDelay = `${randomDelay}s`;
            vine.style.animationDuration = `${randomDuration}s`;
        });
    }
    
    setRandomAnimation();

    const helloText = document.querySelector('.hello-text');
    const retryButton = document.querySelector('.retry-button');
    const successSection = document.querySelector('.success-section');
    const starContainer = document.querySelector('.star-container');
    let isInitialState = true;
    let retryCount = 0;

    // Background color combinations
    const backgroundColors = [
        'linear-gradient(135deg, #9b59b6, #8e44ad)',
        'linear-gradient(135deg, #e74c3c, #c0392b)',
        'linear-gradient(135deg, #3498db, #2980b9)',
        'linear-gradient(135deg, #f1c40f, #f39c12)',
        'linear-gradient(135deg, #1abc9c, #16a085)'
    ];

    // Fun messages for retry button
    const funMessages = [
        'Aferin Devam', 'Güzellllll', 'Yeter!'
    ];

    // Create stars around text
    function createStars() {
        const starCount = 20;
        starContainer.innerHTML = '';
        
        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.cssText = `
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation-delay: ${Math.random() * 2}s;
            `;
            starContainer.appendChild(star);
        }
    }

    // Create enhanced confetti
    function createConfetti(intensity = 1) {
        const colors = ['#f1c40f', '#e74c3c', '#3498db', '#2ecc71', '#9b59b6'];
        const confettiCount = 150 * intensity;
        const confettiContainer = document.querySelector('.confetti-container');
        confettiContainer.innerHTML = '';
        
        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.cssText = `
                background-color: ${colors[Math.floor(Math.random() * colors.length)]};
                left: ${Math.random() * 100}vw;
                animation-duration: ${Math.random() * 3 + 2}s;
                animation-delay: ${Math.random() * 2}s;
            `;
            confettiContainer.appendChild(confetti);
            
            setTimeout(() => {
                confetti.remove();
            }, 5000);
        }
    }

    // Text click event with enhanced effects
    helloText.addEventListener('click', () => {
        if (isInitialState) {
            isInitialState = false;
            helloText.classList.remove('animated');
            
            // Dramatic text effect
            helloText.style.animation = 'textSplit 1s forwards';
            successSection.style.background = backgroundColors[0];
            
            // Create effects
            createConfetti(1.5);
            createStars();
            
            setTimeout(() => {
                helloText.style.animation = 'fadeIn 1s forwards';
                helloText.textContent = 'İşte şimdi oldu!';
                retryButton.style.display = 'inline-block';
                retryButton.style.animation = 'fadeIn 1s forwards';
            }, 1000);
        }
    });

    // Enhanced retry button event with gallery transition
    retryButton.addEventListener('click', () => {
        retryCount++;
        const intensity = retryCount + 0.5;
        
        if (retryCount <= 3) {
            // Update text and effects
            helloText.textContent = funMessages[retryCount - 1];
            successSection.style.background = backgroundColors[retryCount];
            createConfetti(intensity);
            
            // Button effects
            retryButton.classList.add('button-pulse');
            setTimeout(() => retryButton.classList.remove('button-pulse'), 500);
            
            if (retryCount === 3) {
                // Final dramatic effect
                setTimeout(() => {
                    helloText.style.animation = 'shake 0.5s ease';
                    successSection.style.background = 'linear-gradient(135deg, #e74c3c, #c0392b)';
                    retryButton.style.animation = 'fadeOut 0.5s forwards';
                    
                    setTimeout(() => {
                        retryButton.style.display = 'none';
                        
                        // Show bored question
                        const boredContainer = document.querySelector('.bored-container');
                        boredContainer.style.display = 'block';
                        setTimeout(() => {
                            boredContainer.classList.add('active');
                        }, 100);
                    }, 500);
                }, 100);
            }
        }
    });

    // Show reminder popup
    function showReminderPopup() {
        console.log("Showing reminder popup");
        const reminderPopup = document.getElementById('reminderPopup');
        
        if (!reminderPopup) {
            console.error("Reminder popup element not found!");
            return;
        }
        
        // Force other popups to close
        const allPopups = document.querySelectorAll('.popup-overlay');
        allPopups.forEach(popup => {
            if (popup.id !== 'reminderPopup') {
                popup.style.display = 'none';
            }
        });
        
        reminderPopup.style.display = 'flex';
        
        setTimeout(() => {
            reminderPopup.style.opacity = '1';
            reminderPopup.classList.add('active');
            console.log("Reminder popup should be visible now");
        }, 10);
    }

    // Close reminder popup
    function closeReminderPopup() {
        const reminderPopup = document.getElementById('reminderPopup');
        reminderPopup.style.opacity = '0';
        reminderPopup.classList.remove('active');
        setTimeout(() => {
            reminderPopup.style.display = 'none';
        }, 500);
    }

    // Choice buttons event listeners
    const yesBtn = document.querySelector('.yes-btn');
    const noBtn = document.querySelector('.no-btn');
    const reminderBtn = document.querySelector('.reminder-btn');

    // EVET butonu galeri geçişini başlatır
    yesBtn.addEventListener('click', function() {
        startGalleryTransition();
    });

    // HAYIR butonu uyarı popup'ını gösterir
    noBtn.addEventListener('click', function() {
        showReminderPopup();
    });

    // Anladım butonu
    reminderBtn.addEventListener('click', function() {
        // Close reminder popup
        closeReminderPopup();
        
        // Remove NO button with animation
        noBtn.style.animation = 'fadeOut 0.5s forwards';
        setTimeout(() => {
            noBtn.style.display = 'none';
        }, 500);
    });

    // Gallery transition function
    function startGalleryTransition() {
        const galleryTransition = document.querySelector('.gallery-transition');
        const darknessOverlay = document.querySelector('.darkness-overlay');
        const textContainer = document.querySelector('.transition-text-container');
        const successSection = document.querySelector('.success-section');
        const gallerySection = document.querySelector('.gallery-section');
        
        // Show transition section
        galleryTransition.style.display = 'flex';
        
        // Start darkness animation
        setTimeout(() => {
            darknessOverlay.classList.add('active');
            
            // Hide success section
            successSection.style.opacity = '0';
            
            // Show transition text after screen goes dark
            setTimeout(() => {
                textContainer.classList.add('active');
                
                // Wait for text animation
                setTimeout(() => {
                    // Hide transition text
                    textContainer.classList.remove('active');
                    
                    // Show gallery section
                    gallerySection.style.display = 'flex';
                    setTimeout(() => {
                        gallerySection.classList.add('active');
                        
                        // Activate gallery elements
                        const galleryHeader = document.querySelector('.gallery-header');
                        const galleryContainer = document.querySelector('.gallery-scroll-container');
                        
                        galleryHeader.classList.add('active');
                        galleryContainer.classList.add('active');
                        
                        // Add scroll indicator
                        const scrollIndicator = document.createElement('div');
                        scrollIndicator.className = 'scroll-indicator';
                        gallerySection.appendChild(scrollIndicator);

                        // Add smooth scrolling effect
                        const galleryItems = document.querySelectorAll('.gallery-item');
                        galleryItems.forEach((item, index) => {
                            // Add fade-in effect with delay based on index
                            item.style.opacity = '0';
                            item.style.transform = 'translateY(30px)';
                            item.style.transition = 'opacity 1s ease, transform 1s ease';
                            
                            setTimeout(() => {
                                item.style.opacity = '1';
                                item.style.transform = 'translateY(0)';
                            }, 200 * (index + 1));
                        });
                        
                        // Handle smooth scroll effect
                        galleryContainer.addEventListener('scroll', () => {
                            const scrollPosition = galleryContainer.scrollTop;
                            
                            // Hide scroll indicator when scrolling starts
                            if (scrollPosition > 100) {
                                scrollIndicator.style.opacity = '0';
                            } else {
                                scrollIndicator.style.opacity = '0.7';
                            }
                            
                            // Add parallax effect to photos
                            galleryItems.forEach((item, index) => {
                                const photo = item.querySelector('.gallery-photo');
                                const description = item.querySelector('.photo-description');
                                const itemTop = item.offsetTop;
                                const itemHeight = item.offsetHeight;
                                
                                // Calculate when the item is in view
                                const isVisible = scrollPosition + window.innerHeight > itemTop && 
                                                scrollPosition < itemTop + itemHeight;
                                
                                if (isVisible) {
                                    const scrollRatio = (scrollPosition - itemTop) / itemHeight;
                                    photo.style.transform = `translateY(${scrollRatio * 20}px)`;
                                    description.style.transform = `translateY(${-scrollRatio * 15}px)`;
                                }
                            });
                        });
                        
                        // Hide transition overlay
                        setTimeout(() => {
                            galleryTransition.style.display = 'none';
                            successSection.style.display = 'none';
                        }, 1000);
                    }, 100);
                }, 3500); // Wait for text animation
            }, 1500);
        }, 100);
    }
});

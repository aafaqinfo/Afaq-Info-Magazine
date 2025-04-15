/**
 * research.js - JavaScript file for managing research papers
 * This handles the dynamic functionality of the research papers page
 */

// Research Papers Data Structure - For GitHub Pages integration
const researchData = {
    // Information Organization Sector
    organization: {
        "1446": [
            
        ],
        "1445": [
           
            {
                id: "org-1445-2",
                title: "معوقات تطبيق حلول الارشفة الإلكترونية من وجهة نظر الموظفين بمراكز الأرشيف",
                author: "المشرف: د.بسمة خليفة الشيشيني",
                date: "1445",
                pages: 93,
                downloads: 0,
                filename: "organization/1445/1445_org_alshishini_electronic_archiving_obstacles.pdf"
            }
        ],
        "1444": [
          
        ],
        "1443": [
           
        ]
    },

    // Information Sources Sector
    sources: {
        "1446": [
            
        ],
        "1445": [
            
        ],
        "1444": [

        ],
        "1443": [
           
        ]
    },

    // Information Services Sector
    services: {
        "1446": [

        ],
        "1445": [
          
            {
                id: "svc-1445-2",
                title: "وعي المجتمع السعودي بأمن وشفافية المعلومات بخدمات الحكومة الإلكترونية: دراسة ميدانية",
                author: "المشرف: د.بسمة خليفة الشيشيني",
                date: "1445",
                pages: 88,
                downloads: 0,
                filename: "services/1445/1445_svc_alshishini_egovernment_information_security.pdf"
            }
        ],
        "1444": [
          
            {
                id: "svc-1444-2",
                title: "مدى وعي منسوبي الجامعة الإسلامية بالمدينة المنورة بأخلاقيات النشر العلمي: دراسة ميدانية",
                author: "المشرف: د.بسمة خليفة الشيشيني",
                date: "1444",
                pages: 82,
                downloads: 0,
                filename: "services/1444/1444_svc_alshishini_islamic_university_publishing_ethics.pdf"
            }
        ],
        "1443": [
           
        ]
    },

    // Information Technology Sector
    technology: {
        "1446": [
            
        ],
        "1445": [
          
            {
                id: "tech-1445-2",
                title: "الافادة من التطبيقات التعليمية في مدارس المدينة المنورة: دراسة ميدانية",
                author: "المشرف: د.بسمة خليفة الشيشيني",
                date: "1445",
                pages: 92,
                downloads: 0,
                filename: "technology/1445/1445_tech_alshishini_educational_apps_medina.pdf"
            }
        ],
        "1444": [
          
            {
                id: "tech-1444-2",
                title: "تقييم المواقع الالكترونية والتطبيقات الذكية لشركات الاتصالات بالمملكة العربية السعودية: دراسة تقييمية",
                author: "المشرف: د.بسمة خليفة الشيشيني",
                date: "1444",
                pages: 133,
                downloads: 0,
                filename: "technology/1444/1444_tech_alshishini_telecom_websites_evaluation.pdf"
            }
        ],
        "1443": [
           
            {
                id: "tech-1443-2",
                title: "التطبيقات الذكية كأحد مشروعات التحول الرقمي في ظل رؤية المملكة العربية السعودية 2030: دراسة وصفية تحليلية تقييميه",
                author: "المشرف: د.بسمة خليفة الشيشيني",
                date: "1443",
                pages: 125,
                downloads: 0,
                filename: "technology/1443/1443_tech_alshishini_smart_apps_vision2030.pdf"
            },
            {
                id: "tech-1443-3",
                title: "تطبيقات الهواتف الذكية التي تفيد طلبة علم المعلومات: دراسة وصفية تحليلية تقييمية",
                author: "المشرف: د.بسمة خليفة الشيشيني",
                date: "1443",
                pages: 192,
                downloads: 0,
                filename: "technology/1443/1443_tech_alshishini_smartphone_apps_infoscience.pdf"
            },
            {
                id: "tech-1443-4",
                title: "المنصات والبوابات الالكترونية كإحدى مشروعات التحول الرقمي في ظل رؤية 2030: دراسة وصفية تقييمية تحليلية",
                author: "المشرف: د.بسمة خليفة الشيشيني",
                date: "1443",
                pages: 180,
                downloads: 0,
                filename: "technology/1443/1443_tech_alshishini_digital_platforms_vision2030.pdf"
            }
        ]
    }
};

document.addEventListener('DOMContentLoaded', function() {
    // Load research papers dynamically
    initializeResearchPage();

    // Implement search functionality
    setupSearch();

    // Implement download tracking
    setupDownloadTracking();
});

/**
 * Initialize the research page with dynamic content
 */
function initializeResearchPage() {
    // For each sector and year, render the research papers
    for (const sector in researchData) {
        for (const year in researchData[sector]) {
            const papers = researchData[sector][year];
            
            // تعديل معرّف العنصر الهدف ليتناسب مع HTML
            const targetElement = document.getElementById(`${sector}-${year}`);
            
            if (!targetElement) {
                // محاولة ثانية بصيغة معرّف مختلفة
                const altTargetId = getSectorPrefix(sector) + "-" + year;
                const altTargetElement = document.getElementById(altTargetId);
                
                if (altTargetElement) {
                    renderPapers(altTargetElement, papers);
                } else {
                    console.error(`لم يتم العثور على عنصر بمعرّف ${sector}-${year} أو ${altTargetId}`);
                }
            } else {
                renderPapers(targetElement, papers);
            }
        }
    }
}

/**
 * Get sector prefix for HTML IDs
 */
function getSectorPrefix(sector) {
    switch(sector) {
        case 'organization': return 'org';
        case 'sources': return 'src';
        case 'services': return 'svc';
        case 'technology': return 'tech';
        default: return sector;
    }
}

/**
 * Render papers into target element
 */
function renderPapers(targetElement, papers) {
    // Clear any existing content
    targetElement.innerHTML = '';
    
    // If no papers for this year/sector, show empty state
    if (papers.length === 0) {
        targetElement.innerHTML = `
            <div class="empty-state">
                <i class="far fa-folder-open"></i>
                <h5>لا توجد أبحاث متاحة لهذه السنة</h5>
                <p>يمكنك استعراض السنوات الأخرى أو قم بالبحث عن موضوع محدد</p>
            </div>
        `;
        return;
    }
    
    // Render each paper
    papers.forEach(paper => {
        const paperElement = createResearchPaperElement(paper);
        targetElement.appendChild(paperElement);
    });
}

/**
 * Create a DOM element for a research paper
 * @param {Object} paper The research paper data
 * @returns {HTMLElement} The research paper card element
 */
function createResearchPaperElement(paper) {
    const paperElement = document.createElement('div');
    paperElement.className = 'research-card';
    paperElement.dataset.paperId = paper.id;
    
    paperElement.innerHTML = `
        <h5 class="research-title">${paper.title}</h5>
        <div class="research-author">
            <i class="fas fa-user-edit me-2"></i>${paper.author}
        </div>
        <div class="research-meta">
            <span class="me-3"><i class="far fa-calendar-alt me-1"></i>${paper.date}</span>
            <span><i class="fas fa-file-pdf me-1"></i>${paper.pages} صفحة</span>
        </div>
        <div class="d-flex justify-content-between align-items-center mt-3">
            <a href="downloads/${paper.filename}" class="btn btn-primary download-btn" data-research-id="${paper.id}">
                <i class="fas fa-download"></i>
                تحميل البحث
            </a>
            <span class="download-count">
                <i class="fas fa-chart-line me-1"></i>${paper.downloads} تحميل
            </span>
        </div>
    `;
    
    return paperElement;
}

/**
 * Setup the search functionality
 */
function setupSearch() {
    const searchInput = document.getElementById('search-input');
    
    if (searchInput) {
        searchInput.addEventListener('keyup', function() {
            const searchValue = this.value.toLowerCase();
            
            // For each sector and year, filter the research papers
            for (const sector in researchData) {
                for (const year in researchData[sector]) {
                    const papers = researchData[sector][year];
                    
                    // تجربة كلا المعرّفين المحتملين
                    let targetElement = document.getElementById(`${sector}-${year}`);
                    if (!targetElement) {
                        const altTargetId = getSectorPrefix(sector) + "-" + year;
                        targetElement = document.getElementById(altTargetId);
                    }
                    
                    if (targetElement) {
                        const paperElements = targetElement.querySelectorAll('.research-card');
                        let visibleCount = 0;
                        
                        // Filter papers
                        paperElements.forEach((paperElement, index) => {
                            if (index < papers.length) {
                                const paper = papers[index];
                                
                                if (paper) {
                                    const matchesSearch = 
                                        paper.title.toLowerCase().includes(searchValue) ||
                                        paper.author.toLowerCase().includes(searchValue);
                                    
                                    if (matchesSearch) {
                                        paperElement.style.display = 'block';
                                        visibleCount++;
                                    } else {
                                        paperElement.style.display = 'none';
                                    }
                                }
                            }
                        });
                        
                        // Show empty state if no results
                        const existingEmptyState = targetElement.querySelector('.search-empty');
                        
                        if (visibleCount === 0 && papers.length > 0) {
                            // Only add if we don't already have one
                            if (!existingEmptyState) {
                                const emptyState = document.createElement('div');
                                emptyState.className = 'empty-state search-empty';
                                emptyState.innerHTML = `
                                    <i class="fas fa-search"></i>
                                    <h5>لا توجد نتائج للبحث</h5>
                                    <p>حاول استخدام كلمات بحث أخرى أو استعرض جميع الأبحاث</p>
                                `;
                                
                                targetElement.appendChild(emptyState);
                            }
                        } else if (existingEmptyState) {
                            // Remove empty state if we have results
                            existingEmptyState.remove();
                        }
                    }
                }
            }
        });
    }
}

/**
 * Setup tracking for downloads
 * For GitHub Pages, this would be client-side only
 * In a production environment, you would implement server-side tracking
 */
function setupDownloadTracking() {
    document.addEventListener('click', function(e) {
        // تحديث المحدد ليعمل مع العناصر التي تمت إضافتها ديناميكيًا
        if (e.target.closest('.download-btn')) {
            const button = e.target.closest('.download-btn');
            // Get the research ID
            const researchId = button.getAttribute('data-research-id');
            
            // Find which sector and year this belongs to
            let paperData = null;
            
            for (const sector in researchData) {
                for (const year in researchData[sector]) {
                    const found = researchData[sector][year].find(paper => paper.id === researchId);
                    
                    if (found) {
                        paperData = found;
                        // Increment download count
                        found.downloads++;
                        
                        // Update the display
                        const countElement = button.parentElement.querySelector('.download-count');
                        if (countElement) {
                            countElement.innerHTML = `
                                <i class="fas fa-chart-line me-1"></i>${found.downloads} تحميل
                            `;
                        }
                        
                        break;
                    }
                }
                
                if (paperData) break;
            }
            
            // Save the updated download counts to localStorage
            localStorage.setItem('researchDownloads', JSON.stringify(
                Object.entries(researchData).reduce((acc, [sector, years]) => {
                    acc[sector] = Object.entries(years).reduce((yearAcc, [year, papers]) => {
                        yearAcc[year] = papers.map(paper => ({
                            id: paper.id,
                            downloads: paper.downloads
                        }));
                        return yearAcc;
                    }, {});
                    return acc;
                }, {})
            ));
            
            // Allow the default action (download) to continue
        }
    });
    
    // Load saved download counts from localStorage
    const savedDownloads = localStorage.getItem('researchDownloads');
    
    if (savedDownloads) {
        try {
            const downloadsData = JSON.parse(savedDownloads);
            
            // Update the researchData object with saved downloads
            for (const sector in downloadsData) {
                for (const year in downloadsData[sector]) {
                    downloadsData[sector][year].forEach(savedPaper => {
                        const paperToUpdate = researchData[sector][year].find(paper => paper.id === savedPaper.id);
                        
                        if (paperToUpdate) {
                            paperToUpdate.downloads = savedPaper.downloads;
                        }
                    });
                }
            }
            
            // Update the display for any existing elements
            document.querySelectorAll('.download-count').forEach(countElement => {
                const researchId = countElement.parentElement.querySelector('.download-btn').getAttribute('data-research-id');
                
                // Find which sector and year this belongs to
                for (const sector in researchData) {
                    for (const year in researchData[sector]) {
                        const found = researchData[sector][year].find(paper => paper.id === researchId);
                        
                        if (found) {
                            countElement.innerHTML = `
                                <i class="fas fa-chart-line me-1"></i>${found.downloads} تحميل
                            `;
                            break;
                        }
                    }
                }
            });
        } catch (error) {
            console.error('Error loading saved download counts:', error);
        }
    }
}
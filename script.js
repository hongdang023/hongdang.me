const courses = [
  {
    id: 1,
    title: "Product 101 - Không biết gì cũng làm sản phẩm",
    author: "The1ight (Lucas Quang Nguyễn)",
    tags: ["Product Management", "Product Mindset"],
    reviewLink: "https://harureboot.substack.com/p/21-bai-hoc-tuoi-21-1-dan-non-tech",
    courseLink: "https://the1ight.com/product/buildyour1stproduct/",
    score: 36,
    category: "Product"
  },
  {
    id: 2,
    title: "Customer Decode",
    author: "Conan School",
    tags: ["Job-to-be-done", "Insights", "Purchase Journey"],
    reviewLink: "https://harureboot.substack.com/p/21-bai-hoc-tuoi-21-2-lan-au-tap-toe",
    courseLink: "https://www.conan.school/live-courses/customer-decode",
    score: 35,
    category: "Marketing"
  },
  {
    id: 3,
    title: "Ký hoạ vỡ lòng",
    author: "Lớp học Hồng Xiêm",
    tags: ["Tư duy hội hoạ", "Vẽ", "Nghệ thuật"],
    reviewLink: "https://harureboot.substack.com/p/21-bai-hoc-tuoi-21-4-lan-au-em-con",
    courseLink: "https://www.hongxiem.com/",
    score: 34,
    category: "Art"
  },
  {
    id: 4,
    title: "Múa đương đại cơ bản",
    author: "Kinergie Studio",
    tags: ["Múa đương đại", "Chuyển động", "Ngôn ngữ hình thể"],
    reviewLink: "https://harureboot.substack.com/p/21-bai-hoc-tuoi-21-5-lan-au-i-hoc",
    courseLink: "https://www.facebook.com/KinergieStudio",
    score: 38,
    category: "Art"
  },
  {
    id: 5,
    title: "Improv 101",
    author: "ACA - Actors",
    tags: ["Ứng tác", "Thuyết trình"],
    reviewLink: "https://harureboot.substack.com/p/21-bai-hoc-tuoi-21-6-lan-au-hoc-improv",
    courseLink: "https://www.aca-hanoi.com/ung-tac-dien-vien",
    score: 37,
    category: "Soft Skills"
  },
  {
    id: 6,
    title: "Makeup cá nhân 1-1",
    author: "Monarosa (Cầu Giấy)",
    tags: ["Làm đẹp"],
    reviewLink: "#",
    courseLink: "#",
    score: 33,
    category: "Life"
  },
  {
    id: 7,
    title: "Học Cách Học",
    author: "Mở - Mơ và Hỏi",
    tags: ["Learning Science"],
    reviewLink: "#",
    courseLink: "#",
    score: 39,
    category: "Mindset"
  },
  {
    id: 8,
    title: "Writing on The Net",
    author: "Mở - Mơ và Hỏi",
    tags: ["Tư duy viết", "Second Brain", "Vượt qua nỗi sợ"],
    reviewLink: "#",
    courseLink: "https://www.youtube.com/watch?v=mO--KBiOY4w&list=PLYz_felp3Scz99z1FjmTzQlGwzssrb07Q",
    score: 35,
    category: "Skills"
  },
  {
    id: 9,
    title: "Case Interview Fundamental",
    author: "Crafting Cases",
    tags: ["Case Interview", "Problem Solving"],
    reviewLink: "#",
    courseLink: "https://www.craftingcases.com/",
    score: 36,
    category: "Skills"
  }
];

const productsData = [
  {
    id: 1,
    title: "Quy trình Onboarding Tự động & Ứng dụng AI",
    partner: "UpYouth Social Ltd. Co.",
    categories: ["Vận hành & Quản lý", "Thiết kế học tập"],
    summary: "Tạo cấu trúc tự động hóa quy trình Onboarding, sử dụng Handbook tập trung và AI thay vì phân tán nội dung.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
    details: `
      <h4>Vấn đề giải quyết:</h4>
      <p>Quy trình không nhất quán, nội dung phân tán trên nhiều nền tảng, thiếu sự hỗ trợ liên tục dẫn đến người mới bị ngợp và lãng phí thời gian của các Seniors.</p>
      <h4>Vai trò & Giải pháp:</h4>
      <ul>
        <li>Tạo Handbook toàn tổ chức có hyperlink, tự điều chỉnh tốc độ học.</li>
        <li>Xây dựng quy trình Onboarding ứng dụng AI tự động gửi tài liệu.</li>
        <li>Thiết lập nhóm FAQ và sắp xếp Buddies cho nhân sự mới.</li>
      </ul>
      <h4 style="color: var(--accent-burgundy); margin-top:16px;">Kết quả:</h4>
      <ul>
        <li>Điểm hài lòng tăng từ 8.2/10 lên 9.5/10.</li>
        <li>95% nhân viên hoàn thành trong vòng 2 tuần.</li>
        <li>Chuẩn hóa 100% các phòng ban.</li>
      </ul>
    `
  },
  {
    id: 2,
    title: "Tarot BaseCRM Quest (Gamified Learning)",
    partner: "Base.vn Enterprise (Sales Team)",
    categories: ["Thiết kế học tập"],
    summary: "Giải pháp gamification dưới mác Tarot để đào tạo công cụ nội bộ B2B giúp thu hút Gen Z.",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=800",
    details: `
      <h4>Vấn đề giải quyết:</h4>
      <p>Các buổi đào tạo sản phẩm B2B truyền thống thường khô khan, phức tạp và gây quá tải kiến thức cho nhân sự trẻ (Gen Z).</p>
      <h4>Vai trò & Giải pháp:</h4>
      <p>Thiết kế Tarot BaseCRM Quest - một hành trình học tập gamified. Trả lời trắc nghiệm đúng để "rút" thông điệp vũ trụ (tarot) liên kết với từng chức năng sản phẩm.</p>
      <h4 style="color: var(--accent-burgundy); margin-top:16px;">Bài học rút ra:</h4>
      <p>Nhận được phản hồi cực kỳ tích cực. Mặc dù có thách thức khi triển khai diện rộng nhưng chứng minh được tiềm năng của Gamification để biến kiến thức khô khan thành trải nghiệm ấn tượng.</p>
    `
  },
  {
    id: 3,
    title: "Gamified Tracker: Hành Trình Ra Khơi",
    partner: "The1ight Product Course (Online)",
    categories: ["Vận hành & Quản lý", "Xây dựng cộng đồng"],
    summary: "Mini LMS tự xây dựng trên Google Sheets giúp theo dõi tiến độ và kích thích thi đua thông qua Leaderboard.",
    image: "https://images.unsplash.com/photo-1543286386-2e659306cd6c?auto=format&fit=crop&q=80&w=800",
    details: `
      <h4>Vấn đề giải quyết:</h4>
      <p>Các lớp quy mô nhỏ cần công cụ tracking tiến độ người học mà không muốn đầu tư LMS đắt đỏ phức tạp. Người học dễ bị cảm giác chán nản, đi vào lối mòn.</p>
      <h4>Vai trò & Giải pháp:</h4>
      <p>Tạo một "Mini LMS" hoàn toàn trên Google Sheets kết hợp Storytelling (Chủ đề Hành trình Ra khơi). Bao gồm Leaderboard và Personal Tracking tự động cộng điểm khi học viên hoàn thành khóa học.</p>
      <h4 style="color: var(--accent-burgundy); margin-top:16px;">Kết quả:</h4>
      <ul>
        <li>~90% học viên tham gia tích cực các thử thách học tập.</li>
        <li>Chi phí cực thấp, dễ vận hành nhưng hiệu ứng tương tác cao do tính thi đua.</li>
        <li>Giúp L&D giảm tải được khối lượng theo dõi (low-admin).</li>
      </ul>
    `
  },
  {
    id: 4,
    title: "Internal Comms & Nhắc Lại Kiến Thức",
    partner: "Sun World Group & UpYouth",
    categories: ["Truyền thông nội bộ", "Xây dựng cộng đồng"],
    summary: "Truyền thông văn hóa qua Lingo Hub mỗi ngày và kết nối thành viên nội bộ với Quizizz, hoạt động Peer Sharing.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800",
    details: `
      <h4>Vấn đề giải quyết:</h4>
      <p>Khối lượng tài liệu văn hóa / quy định nội bộ quá lớn. Nhân sự quên nhanh hoặc cảm thấy khô khan, dẫn đến tỷ lệ nhân viên rớt tiêu chuẩn đầu vào/đầu ra kỳ thi rất lớn và lãng phí thời gian doanh nghiệp.</p>
      <h4>Vai trò & Giải pháp:</h4>
      <ul>
        <li>Khởi tạo "Lingo Hub" nhắc thuật ngữ mỗi ngày.</li>
        <li>Tổ chức các buổi ôn tập live với Quizizz và Minigame có thưởng.</li>
        <li>Tổ chức các hoạt động Peer Sharing nội bộ.</li>
      </ul>
      <h4 style="color: var(--accent-burgundy); margin-top:16px;">Kết quả:</h4>
      <ul>
        <li>>85% nhân sự ghi nhớ và vượt qua bài đánh giá nội bộ.</li>
        <li>Mức độ tương tác nội bộ tăng 30%.</li>
      </ul>
    `
  },
  {
    id: 5,
    title: "[6 năm] Vòng về Phim",
    partner: "Sustainable Entrepreneurship Fellowship",
    categories: ["Vận hành & Quản lý", "Xây dựng cộng đồng"],
    summary: "Thành lập Team viết về phim với ước mơ nâng cao gu thưởng thức nghệ thuật đại chúng. Lọt Top 3 Cuộc thi Khởi nghiệp.",
    image: "https://u1.padletusercontent.com/uploads/padlet-uploads-usc1/2007286498/a26ca587efeff69167ab2653bc37a598/image.png?expiry_token=5WaHZRdGG3LkUVQGy3SZ-zdRtq89aJeottSBaF_Hii8dmxJqYDvE2-MDbblcM-ZrVekXW99RReKkJFIoMoKio8tndEUBLnv9KcbsiJftW042dmkSubq0le5tPONTe3ErqKigKA1VpDnQUApzRV8jIiBLY1pN60JsyZjS8nRcgogUox-jbj_8BM2jgqN8pyy0gvxN2vdHEBxrSAmpFVUzKQ%3D%3D",
    details: `
      <p>Vào đêm 25/01/2019, mình cùng nhóm bạn thành lập Team viết về phim với ước mơ nâng cao gu thưởng thức nghệ thuật đại chúng & đưa điện ảnh Việt Nam ra thế giới.</p>
      <p>Hiện tại, dù rẽ hướng kinh doanh, mình vẫn đam mê hỗ trợ các dự án nghệ thuật và xây dựng hệ sinh thái nghệ thuật bền vững.</p>
    `
  },
  {
    id: 6,
    title: "[5 tháng] Chuỗi 12 E-Book đóng gói",
    partner: "Learning Science Initiative",
    categories: ["Thiết kế học tập"],
    summary: "Đóng gói và Sơ đồ hóa kiến thức về Learning Science từ 300 trang sách.",
    image: "https://u1.padletusercontent.com/uploads/padlet-uploads-usc1/2007286498/cd9cb7d328f53aa1b2832607f7b8e22b/image.png?expiry_token=5WaHZRdGG3LkUVQGy3SZ-zdRtq89aJeottSBaF_Hii8dmxJqYDvE2-MDbblcM-ZrVekXW99RReKkJFIoMoKio8tndEUBLnv9KcbsiJftW074xWj51sV0uQ1i25z9bSB0clblTcclaPgtOKE7bciDVkeILm8ZE7vW4d_xMAKIk74wfMNR8TPohk0eYXbD7MtN28NEpp15iI3sjNiC6MqG2w%3D%3D",
    details: `
      <p>Mình đã dành nửa năm để mần mò 300 trang sách "Nhà đào tạo sành sỏi" và hệ thống hóa lại vì ngán ngẩm cảnh đào tạo cảm tính, thiếu tiêu chí.</p>
      <p>Sản phẩm này là nỗ lực tạo ra tài nguyên giảng dạy được chuẩn hoá khoa học và có tính thẩm mỹ cao để lan toả trong nội bộ team.</p>
    `
  },
  {
    id: 7,
    title: "[1 tuần] ClassQuest | LMS bằng Vibe Code",
    partner: "Personal Challenge",
    categories: ["Vận hành & Quản lý", "Thiết kế học tập"],
    summary: "Hệ thống quản trị học tập được xây dựng trong 1 tuần bằng Vibe Coding.",
    image: "https://padlet-artifacts.storage.googleapis.com/e4dae193438c16fcb91fe936c4c00f39edab44f6/24ce0310f5970aa4e9373448af6d9cae-h-fcd39bfae21e2c0cffa19a1350f21cde.jpg",
    details: `
      <p>Hệ thống quản trị học tập (LMS) được xây dựng trong 1 tuần hoàn toàn bằng Vibe Coding cho mục đích Gamify track record.</p>
      <p>Link trải nghiệm: <a href="https://gamify-my-progress.lovable.app" target="_blank" style="color:var(--accent-burgundy); font-weight:600;">gamify-my-progress.lovable.app</a></p>
    `
  },
  {
    id: 8,
    title: "[4 tháng] Map The System Scientific Research",
    partner: "Oxford x NEU",
    categories: ["Truyền thông nội bộ"],
    summary: "Top 15 Local Round of Map The System Scientific Research.",
    image: "https://u1.padletusercontent.com/uploads/padlet-uploads-usc1/2007286498/bc1e4a1fe994db2345e5ed00569bfc14/image.png?expiry_token=5WaHZRdGG3LkUVQGy3SZ-zdRtq89aJeottSBaF_Hii8dmxJqYDvE2-MDbblcM-ZrVekXW99RReKkJFIoMoKio8tndEUBLnv9KcbsiJftW06a74D-ojtnT4Gf5Ji1y2YSd4keqkwf_lGw1qxhWQjS0dCc21_Ef3VHL8YZnHvmeNv_gcHj-njX1N4VtSCVQyPna74RMsGGYPD_WxXBNbXsGg%3D%3D",
    details: `
      <p>Lần đầu va chạm với Nghiên cứu khoa học hồi năm 1 Đại học. Tham gia thi cử tranh đấu và lọt tới top 15 vòng thi Local khu vực của đại học kinh tế quốc dân và Oxford tổ chức.</p>
    `
  }
];

document.addEventListener('DOMContentLoaded', () => {
  // logic cho Khóa học (Hồng's List)
  const courseGrid = document.getElementById('courseGrid');
  if (courseGrid) {
    const courseBtns = document.querySelectorAll('.filter-btn[data-filter]');

    // Initial Render
    renderCourses('All');

    courseBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        courseBtns.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        renderCourses(e.target.getAttribute('data-filter'));
      });
    });
  }

  // logic cho Products
  const productGrid = document.getElementById('productGrid');
  if (productGrid) {
    const productBtns = document.querySelectorAll('.product-filter-btn');
    const modal = document.getElementById('productModal');
    const modalBody = document.getElementById('modalBody');
    const modalClose = document.getElementById('modalClose');

    // Initial render
    renderProducts('All');

    productBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        productBtns.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        renderProducts(e.target.getAttribute('data-filter'));
      });
    });

    // Close Modal Logic
    modalClose.addEventListener('click', () => {
      modal.classList.remove('active');
    });
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('active');
    });
  }

  function renderCourses(category) {
    if (!courseGrid) return;
    courseGrid.innerHTML = '';

    let filtered = courses;
    if (category !== 'All') {
      filtered = courses.filter(c => c.category === category || c.tags.includes(category));
    }

    filtered.forEach(course => {
      const card = document.createElement('div');
      card.className = 'course-card padlet-card'; // Reuse some padlet styles mostly
      card.style.padding = '24px';
      card.style.cursor = 'default';
      card.style.height = '100%';
      card.style.background = 'var(--card-bg)';

      const tagsHtml = course.tags.map(tag => `<span class="padlet-tag">${tag}</span>`).join('');

      card.innerHTML = `
        <div style="margin-bottom: 8px;">
          ${tagsHtml}
        </div>
        <h3 class="padlet-title">${course.title}</h3>
        <p style="color: #666; font-size:0.95rem; margin-bottom:16px;">${course.author}</p>
        <div style="font-weight:700; color:var(--accent-burgundy); margin-bottom:16px; font-size:1.1rem;">Điểm 4D: ${course.score}/40</div>
        ${course.reviewLink !== '#' ? `<a href="${course.reviewLink}" target="_blank" class="btn btn-outline" style="align-self: flex-start; margin-top: auto; padding: 6px 12px; font-size: 0.85rem;">Xem Review Chi Tiết</a>` : ''}
      `;
      courseGrid.appendChild(card);
    });
  }

  function renderProducts(category) {
    if (!productGrid) return;
    productGrid.innerHTML = '';

    let filtered = productsData;
    if (category !== 'All') {
      filtered = productsData.filter(p => p.categories.includes(category));
    }

    filtered.forEach(prod => {
      const card = document.createElement('div');
      card.className = 'padlet-card';
      let tagsHtml = prod.categories.map(c => `<span class="padlet-tag">${c}</span>`).join(' ');

      card.innerHTML = `
        <div class="padlet-img" style="background-image: url('${prod.image}'); background-size: cover; background-position: center;"></div>
        <div class="padlet-body">
          <div style="margin-bottom: 8px;">${tagsHtml}</div>
          <h3 class="padlet-title">${prod.title}</h3>
          <p style="font-size: 0.85rem; color:#888; font-weight:600; margin-bottom: 8px;">Đối tác: ${prod.partner}</p>
          <p class="padlet-desc">${prod.summary}</p>
        </div>
      `;

      card.addEventListener('click', () => {
        openModal(prod);
      });

      productGrid.appendChild(card);
    });
  }

  function openModal(prod) {
    const modal = document.getElementById('productModal');
    const modalBody = document.getElementById('modalBody');
    let tagsHtml = prod.categories.map(c => `<span class="padlet-tag">${c}</span>`).join(' ');

    modalBody.innerHTML = `
      <img src="${prod.image}" alt="${prod.title}" style="max-height: 250px; object-fit: cover; border-radius: 8px; margin-bottom: 24px;">
      <div style="margin-bottom: 8px;">${tagsHtml}</div>
      <h2 style="font-size: 2rem; margin-bottom: 8px; color: var(--text-primary);">${prod.title}</h2>
      <p style="font-weight: 600; color: #666; font-size: 0.95rem; margin-bottom: 24px; border-bottom: 1px solid var(--gray-bg); padding-bottom: 16px;">Đối tác: ${prod.partner}</p>
      <div style="line-height: 1.8; color: #444;">
        ${prod.details}
      </div>
    `;

    modal.classList.add('active');
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const headers = document.querySelectorAll('.accordion-header');

  headers.forEach((header, index) => {
    const content = header.nextElementSibling;
    const arrow = document.getElementById(`direct${index + 1}`);

    header.addEventListener('click', () => {
      const isActive = header.classList.contains('active');

      // Close all accordion items
      headers.forEach((item, idx) => {
        const content = item.nextElementSibling;
        const arr = document.getElementById(`direct${idx + 1}`);

        if (item !== header && item.classList.contains('active')) {
          item.classList.remove('active');
          content.style.animation = 'accordionClose 0.4s ease-out forwards';
          setTimeout(() => {
            content.style.display = 'none';
          }, 400);
          arr.innerHTML = `<i class="bi bi-chevron-up"></i>`;
        }
      });

      if (!isActive) {
        header.classList.add('active');
        content.style.display = 'block';
        content.style.animation = 'accordionOpen 0.4s ease-out forwards';
        arrow.innerHTML = `<i class="bi bi-chevron-up"></i>`;
      } else {
        header.classList.remove('active');
        content.style.animation = 'accordionClose 0.4s ease-out forwards';
        setTimeout(() => {
          content.style.display = 'none';
        }, 400);
        arrow.innerHTML = `<i class="bi bi-chevron-down"></i>`;
      }
    });
  });
});
document.addEventListener('DOMContentLoaded', function () {
  const acc3Items = document.querySelectorAll('.acc3-item');

  acc3Items.forEach((item, index) => {
    const header = item.querySelector('.acc3-header');
    const content = item.querySelector('.acc3-content');
    const icon = item.querySelector('.icon i');

    header.addEventListener('click', function () {
      const isActive = item.classList.contains('active');

      acc3Items.forEach((otherItem, otherIndex) => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          const otherContent = otherItem.querySelector('.acc3-content');
          const otherIcon = otherItem.querySelector('.icon i');
          otherContent.style.animation = 'accordionClose 0.4s ease-out forwards';
          setTimeout(() => {
            otherContent.style.display = 'none';
          }, 400);
          otherIcon.classList.remove('bi-chevron-up');
          otherIcon.classList.add('bi-chevron-down');
        }
      });

      if (!isActive) {
        item.classList.add('active');
        content.style.display = 'block';
        content.style.animation = 'accordionOpen 0.4s ease-out forwards';
        icon.classList.remove('bi-chevron-down');
        icon.classList.add('bi-chevron-up');
      } else {
        item.classList.remove('active');
        content.style.animation = 'accordionClose 0.4s ease-out forwards';
        setTimeout(() => {
          content.style.display = 'none';
        }, 400);
        icon.classList.remove('bi-chevron-up');
        icon.classList.add('bi-chevron-down');
      }
    });
  });
});
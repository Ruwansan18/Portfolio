document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('click', () => {
      
      document.querySelectorAll('.skill-card').forEach(c => {
        c.classList.remove(
          'selected',
          'html',
          'css',
          'js',
          'network',
          'security',
          'mobile'
        );
      });
  
      const skill = card.dataset.skill;
      card.classList.add('selected', skill);
    });
  });

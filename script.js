// CHANGE PC COMPONENT HERE. Prices are editable CAD estimates, not owned items.
const dreamComponents = [
  { name: 'CPU', item: 'AMD Ryzen 9 9950X3D', price: 950, does: 'The central processor runs instructions and coordinates the work of the computer.', want: 'A powerful CPU would be great for demanding engineering tools, creative projects, and games.', search: 'AMD Ryzen 9 9950X3D' },
  { name: 'GPU', item: 'NVIDIA GeForce RTX 5090', price: 3200, does: 'The graphics processor handles complex visuals, 3D rendering, and many parallel calculations.', want: 'It could make detailed 3D design, simulations, and high-resolution games run smoothly.', search: 'NVIDIA GeForce RTX 5090' },
  { name: 'Motherboard', item: 'High-end X870E motherboard', price: 750, does: 'The motherboard connects the processor, memory, storage, and other parts together.', want: 'A premium board gives a powerful build room to grow and plenty of fast connections.', search: 'high-end X870E motherboard' },
  { name: 'RAM', item: '128GB high-speed DDR5 memory', price: 650, does: 'Memory keeps information ready for the processor while programs are running.', want: 'A huge amount of fast memory would help with many projects and apps at once.', search: '128GB DDR5 memory' },
  { name: 'Storage', item: '4TB+ NVMe Gen 5 SSD', price: 650, does: 'An SSD stores files and loads programs; NVMe Gen 5 drives can transfer data very quickly.', want: 'Fast primary storage means quick loading for large creative and engineering projects.', search: '4TB NVMe Gen 5 SSD' },
  { name: 'Additional storage', item: '8TB high-speed SSD / HDD', price: 700, does: 'Additional storage gives a computer more room for games, videos, and backups.', want: 'An extra 8TB would keep a growing library of files and projects together.', search: '8TB SSD storage' },
  { name: 'CPU cooling', item: 'High-end 360mm / 420mm liquid cooler', price: 400, does: 'A liquid cooler moves heat away from the processor so it can work reliably.', want: 'A capable cooler helps a high-performance processor stay cool during long tasks.', search: '420mm liquid CPU cooler' },
  { name: 'Power supply', item: '1200W+ 80+ Platinum / Titanium PSU', price: 550, does: 'The power supply safely converts electricity and provides it to every PC component.', want: 'A high-quality, efficient power supply can support demanding parts with headroom.', search: '1200W 80 Plus Platinum power supply' },
  { name: 'Case', item: 'Premium full-tower airflow case', price: 500, does: 'The case protects the components and helps route airflow through the computer.', want: 'A roomy full-tower case would fit the build and make it easier to upgrade later.', search: 'premium full tower airflow PC case' },
  { name: 'Fans', item: 'Multiple high-performance ARGB fans', price: 250, does: 'Fans move cool air into the case and warm air out of it.', want: 'Quiet, effective airflow with customizable lighting would look great and help cooling.', search: 'high performance ARGB PC fans' },
  { name: 'Monitor', item: '4K high-refresh-rate OLED monitor', price: 1800, does: 'A monitor displays the computer’s image; OLED pixels create rich color and deep contrast.', want: 'A sharp 4K picture and smooth refresh rate would be amazing for gaming and design.', search: '4K high refresh rate OLED monitor' },
  { name: 'Keyboard', item: 'Premium mechanical gaming keyboard', price: 300, does: 'A keyboard turns each key press into an input for the computer.', want: 'Mechanical switches feel precise and can make long sessions comfortable.', search: 'premium mechanical gaming keyboard' },
  { name: 'Mouse', item: 'High-end lightweight gaming mouse', price: 220, does: 'A mouse controls the pointer and helps navigate the desktop and games.', want: 'A light, accurate mouse would be responsive for both creative work and play.', search: 'lightweight high end gaming mouse' },
  { name: 'Headset', item: 'Premium wireless gaming headset', price: 450, does: 'A headset combines headphones and a microphone for focused listening and communication.', want: 'Wireless comfort and clear sound would be useful for music, games, and calls.', search: 'premium wireless gaming headset' },
  { name: 'Microphone', item: 'Professional USB / XLR microphone', price: 400, does: 'A microphone converts a voice into a signal that can be recorded or shared.', want: 'A clear mic would be useful for presenting projects, recording, or chatting.', search: 'professional USB XLR microphone' },
  { name: 'Speakers', item: 'Premium desktop speakers', price: 650, does: 'Speakers turn audio signals into sound you can hear in a room.', want: 'Good desktop speakers would make music and films sound much more immersive.', search: 'premium desktop speakers' },
  { name: 'Webcam', item: '4K webcam', price: 350, does: 'A webcam captures video for meetings, lessons, and recordings.', want: 'A sharp webcam would be helpful for presentations and sharing projects.', search: '4K webcam' },
  { name: 'Desk', item: 'Large gaming / creator desk', price: 900, does: 'A desk provides a stable, comfortable surface for a computer and creative work.', want: 'A wide desk would leave room for the PC, monitor, and project materials.', search: 'large gaming creator desk' },
  { name: 'Chair', item: 'Ergonomic premium office chair', price: 1200, does: 'An ergonomic chair supports a comfortable seated position during focused work.', want: 'A supportive chair would make longer study and project sessions more comfortable.', search: 'premium ergonomic office chair' },
  { name: 'Large desk mat', item: 'Extended desk mat', price: 80, does: 'A desk mat protects the desktop and gives the keyboard and mouse a shared surface.', want: 'A large mat would bring the whole desk together and make mouse movement smooth.', search: 'extended desk mat' },
  { name: 'RGB lighting', item: 'Customizable ambient RGB lighting', price: 160, does: 'RGB lighting can add adjustable color to the room or computer setup.', want: 'I could tune the colors to match the mood without making the setup distracting.', search: 'PC ambient RGB lighting' },
  { name: 'Monitor arm', item: 'Adjustable monitor arm', price: 220, does: 'A monitor arm holds a display and lets it move to a comfortable position.', want: 'It would free up desk space and make screen height easy to adjust.', search: 'adjustable monitor arm' },
  { name: 'Cable management', item: 'Cable tray and routing kit', price: 100, does: 'Cable management keeps cords organized and out of the way.', want: 'A neat workspace is easier to use and much nicer to look at.', search: 'desk cable management kit' },
  { name: 'USB hub', item: 'Powered high-speed USB hub', price: 140, does: 'A USB hub expands the number of devices that can connect to the computer.', want: 'It would make it simple to plug in drives and accessories when I need them.', search: 'powered high speed USB hub' },
  { name: 'Stream deck', item: 'Programmable control panel', price: 260, does: 'A programmable control panel puts useful shortcuts and actions on dedicated buttons.', want: 'Custom shortcuts could speed up editing, presentations, and project workflows.', search: 'programmable stream deck control panel' },
  { name: 'Networking', item: 'High-speed Ethernet / Wi-Fi', price: 250, does: 'A network connection lets a computer communicate with the internet and other devices.', want: 'Fast, reliable networking helps with downloads, collaboration, and online work.', search: 'high speed Wi-Fi 7 Ethernet adapter' },
  { name: 'UPS backup', item: 'Battery backup and surge protection', price: 450, does: 'A UPS can provide temporary battery power and help protect equipment from power events.', want: 'It could give me time to save work safely if the power suddenly went out.', search: 'UPS battery backup computer' }
];

// CHANGE FAVORITE SONG HERE: embedded video IDs and watch links are in index.html.
// ADD YOUR FUN FACT HERE: update this list whenever you want.
const funFacts = [
  'I’m interested in how things work, from computers all the way to spacecraft.',
  'One of my big goals is to become an aerospace engineer.',
  'Downtown Toronto is one of my favorite places to explore.',
  'Singapore and Dubai are both on my travel wish list.',
  'Music helps make an ordinary day feel a little more exciting.'
];

// CHANGE MAP LOCATION HERE: this is a general public area, never a personal location.
const mapLocation = 'Downtown Toronto, Ontario, Canada';

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

function initializeLoader() {
  const loader = $('.loader');
  window.addEventListener('load', () => window.setTimeout(() => loader?.classList.add('is-hidden'), 350), { once: true });
  window.setTimeout(() => loader?.classList.add('is-hidden'), 2200);
}

function initializeTheme() {
  const root = document.documentElement;
  const button = $('.theme-toggle');
  let savedTheme = '';
  try { savedTheme = localStorage.getItem('shrut-theme') || ''; } catch { /* Storage may be unavailable in private browsing. */ }
  if (savedTheme === 'light' || savedTheme === 'dark') root.dataset.theme = savedTheme;
  updateThemeButton();
  button?.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'light' ? 'dark' : 'light';
    try { localStorage.setItem('shrut-theme', root.dataset.theme); } catch { /* Theme still works for this visit. */ }
    updateThemeButton();
  });
  function updateThemeButton() {
    const isLight = root.dataset.theme === 'light';
    if (!button) return;
    button.setAttribute('aria-label', `Switch to ${isLight ? 'dark' : 'light'} mode`);
    $('.theme-icon', button).textContent = isLight ? '☾' : '☼';
  }
}

function initializeNavigation() {
  const menuButton = $('.menu-toggle');
  const nav = $('.site-nav');
  menuButton?.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') !== 'true';
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    nav?.classList.toggle('is-open', open);
  });
  $$('.site-nav a').forEach(link => link.addEventListener('click', () => {
    menuButton?.setAttribute('aria-expanded', 'false');
    menuButton?.setAttribute('aria-label', 'Open navigation');
    nav?.classList.remove('is-open');
  }));

  const navLinks = $$('.site-nav a[href^="#"]');
  const trackedSections = navLinks.map(link => $(link.getAttribute('href'))).filter(Boolean);
  const observer = new IntersectionObserver(entries => {
    const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    navLinks.forEach(link => {
      const active = link.getAttribute('href') === `#${visible.target.id}`;
      link.classList.toggle('active', active);
      if (active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }, { rootMargin: '-25% 0px -55% 0px', threshold: [0, .15, .35, .6] });
  trackedSections.forEach(section => observer.observe(section));
}

function initializeReveals() {
  const elements = $$('.reveal');
  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    elements.forEach(element => element.classList.add('is-visible'));
    return;
  }
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  }), { threshold: .12 });
  elements.forEach((element, index) => {
    element.style.transitionDelay = `${(index % 3) * 70}ms`;
    observer.observe(element);
  });
}

function initializeAboutCards() {
  $$('.about-card').forEach(card => card.addEventListener('click', () => {
    const expanded = card.getAttribute('aria-expanded') === 'true';
    card.setAttribute('aria-expanded', String(!expanded));
  }));
}

function initializeTravelPicker() {
  const button = $('#travel-pick-button');
  const result = $('#travel-result');
  let previous = -1;
  button?.addEventListener('click', () => {
    const destinations = [
      { name: 'Singapore', flag: '🇸🇬', section: '#travel', url: 'https://www.visitsingapore.com/' },
      { name: 'Dubai', flag: '🇦🇪', section: '#travel', url: 'https://www.visitdubai.com/' }
    ];
    let selection = Math.floor(Math.random() * destinations.length);
    if (selection === previous) selection = (selection + 1) % destinations.length;
    previous = selection;
    const destination = destinations[selection];
    result.classList.remove('show');
    window.setTimeout(() => {
      result.innerHTML = `${destination.flag} First stop: <a href="${destination.url}" target="_blank" rel="noopener noreferrer">${destination.name} ↗</a>`;
      result.classList.add('show');
    }, 120);
  });
}

function initializeFacts() {
  const button = $('#fact-button');
  const text = $('#fact-text');
  const index = $('#fact-index');
  let previous = 0;
  button?.addEventListener('click', () => {
    let selected = Math.floor(Math.random() * funFacts.length);
    if (selected === previous && funFacts.length > 1) selected = (selected + 1) % funFacts.length;
    previous = selected;
    text.classList.add('changing');
    window.setTimeout(() => {
      text.textContent = funFacts[selected];
      index.textContent = `${String(selected + 1).padStart(2, '0')} / ${String(funFacts.length).padStart(2, '0')}`;
      text.classList.remove('changing');
    }, 180);
  });
}

function initializeDreamSetup() {
  const list = $('#component-list');
  const detail = $('#component-detail');
  const total = dreamComponents.reduce((sum, component) => sum + component.price, 0);
  $('#component-count').textContent = `${String(dreamComponents.length).padStart(2, '0')} PARTS`;
  $('#dream-total').textContent = new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD', maximumFractionDigits: 0 }).format(total);

  dreamComponents.forEach((component, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'component-button';
    button.setAttribute('aria-pressed', 'false');
    button.innerHTML = `<span><span class="component-symbol">${String(index + 1).padStart(2, '0')} / </span>${component.name}</span><span aria-hidden="true">↗</span>`;
    button.addEventListener('click', () => {
      $$('.component-button', list).forEach(item => item.setAttribute('aria-pressed', 'false'));
      button.setAttribute('aria-pressed', 'true');
      const price = new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD', maximumFractionDigits: 0 }).format(component.price);
      const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(component.search)}`;
      detail.innerHTML = `<span class="eyebrow">${component.name.toUpperCase()}</span><h3>${component.item}</h3><p>${component.does} ${component.want}</p><span class="detail-price">ESTIMATE: ${price} CAD</span><br><a class="learn-link" href="${searchUrl}" target="_blank" rel="noopener noreferrer">Learn more ↗</a>`;
    });
    list.append(button);
  });
}

function initializeFooter() {
  $('#current-year').textContent = new Date().getFullYear();
  const mapFrame = $('.map-frame iframe');
  if (mapFrame) mapFrame.title = `Interactive map of ${mapLocation}`;
}

initializeLoader();
initializeTheme();
initializeNavigation();
initializeReveals();
initializeAboutCards();
initializeTravelPicker();
initializeFacts();
initializeDreamSetup();
initializeFooter();

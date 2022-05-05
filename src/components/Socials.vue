<template>
  <ul :class="$style.socials">
    <li :class="[$style.social, $style.telegram]">
      <a href="https://t.me/helpukrainekz" target="_blank">
        <svg fill="currentColor" :class="$style.icon" width="48" height="48">
          <use href="#icon-social-telegram" />
        </svg>
        <span :class="$style.text">Telegram</span>
      </a>
    </li>
    <li :class="[$style.social, $style.facebook]">
      <a href="https://facebook.com/HelpUkraineKZ" target="_blank">
        <svg fill="currentColor" :class="$style.icon" width="48" height="48">
          <use href="#icon-social-facebook" />
        </svg>
        <span :class="$style.text">Facebook</span>
      </a>
    </li>
    <li :class="[$style.social, $style.instagram]">
      <a href="https://instagram.com/help_ukraine_kz" target="_blank">
        <svg fill="currentColor" :class="$style.icon" width="48" height="48">
          <use href="#icon-social-instagram" />
        </svg>
        <span :class="$style.text">Instagram</span>
      </a>
    </li>
  </ul>
</template>

<style lang="postcss" module>
.socials {
  margin: 0;
  list-style-type: none;
  padding: 0;
  display: grid;

  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
.social {
  & .icon {
    margin: 10px;
  }

  &:first-child {
    margin: 0;
  }

  & a {
    display: flex;
    align-items: center;
    color: rgb(var(--on-primary-color));
    text-decoration: none;
    font-size: 1.3rem;
    border-radius: 4px;
    transition: opacity 250ms ease;

    &:hover {
      opacity: 0.85;
    }
  }
}
.facebook a {
  background-color: #4267b2;
}
.telegram a {
  background-color: #0088cc;
}
.instagram a {
  background-color: #30618a;
}

@media only screen and (max-width: 1024px) {
  .socials {
    grid-template-columns: 1fr;
  }
}
</style>

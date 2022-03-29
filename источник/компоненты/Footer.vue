
<script lang="ts" setup>
//// Localization
import { useI18n } from 'vue-i18n'
const { t } = useI18n({
  inheritLocale: true
})
</script>

<template>
  <footer :class="$style.footer">
    <div :class="$style.limiter">
      <div :class="$style.grouped">
        <div :class="$style.panel">
          <p :class="$style.title">{{ t('navigation') }}</p>
          <ul :class="$style.navigation">
            <li>
              <a href="/#our-mission">{{ t('our-mission') }}</a>
            </li>
            <li>
              <a href="/#how-can-you-help">{{ t('how-can-you-help') }}</a>

              <ul>
                <li>
                  <a href="/#give-things">{{ t('give-things') }}</a>
                </li>
                <li>
                  <a href="/#send-money">{{ t('send-money') }}</a>
                </li>
                <li>
                  <a href="/#become-volunteer">{{ t('become-volunteer') }}</a>
                </li>
              </ul>
            </li>

            <li>
              <a href="/#friends">{{ t('our-friends') }}</a>
            </li>
            <li>
              <a href="/#gratitude">{{ t('gratitude') }}</a>
            </li>
          </ul>
        </div>
        <div :class="$style.panel">
          <p :class="$style.title">{{ t('contacts') }}</p>
          <dl :class="$style.navigation">
            <dt>{{ t('embassy-of-ukraine') }}</dt>
            <dd>
              <a
                href="https://www.google.com/maps/search/%D0%B3.+%D0%90%D1%81%D1%82%D0%B0%D0%BD%D0%B0,+%D1%83%D0%BB+%D0%96%D1%8B%D0%BB%D1%8B%D0%BE%D0%B9,12,+%D0%BC-%D0%BD+%D0%9A%D0%B0%D1%80%D0%B0%D0%BE%D1%82%D0%BA%D0%B5%D0%BB%D1%8C/@51.1488554,71.4025348,17z/data=!3m1!4b1"
              >г. Астана, ул Жылыой,12, м-н Караоткель</a>
              <br />

              <a href="tel:+77172400757">+7 (7172) 40-07-57</a>
              <br />
              <a href="tel:+77076578234">+7 (707) 657-82-34</a>
            </dd>

            <dt>{{ t('volunteer-coordination') }}</dt>
            <dd>
              <a href="tel:+77052181357">+7 (705) 218-13-57</a>
            </dd>

            <dt>Координация информационной поддержки:</dt>
            <dd>
              <a href="tel:+77026316062">+7 (702) 631-60-62</a>
            </dd>
          </dl>
        </div>
      </div>

      <div :class="$style.footnote">
        <a href="https://www.flaticon.com/free-icons">Some used icons by Freepik - Flaticon</a>
        —
        <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/">CC BY-NC-ND 4.0</a>
        —
        <span>Штаб гуманитарной поддержки Украины в Казахстане, 2022</span>
      </div>
    </div>
  </footer>
</template>

<style lang="postcss" module>
.title {
  font-weight: 500;
  margin: 0 0 20px;
}

.navigation {
  list-style-type: none;
  padding: 0;
  margin: 0;

  & dt {
    margin: 10px 0;
  }

  & dd {
    margin: 0 0 0 20px;
  }

  & ul {
    list-style-type: none;
    padding-left: 20px;
  }

  & li {
    margin: 10px 0;
  }

  & a {
    color: rgb(var(--on-primary-color));
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}

.footer {
  padding: 40px;
  background-color: rgb(var(--primary-color));
  color: rgb(var(--on-primary-color));
}

.limiter {
  max-width: 1280px;
  margin: 0 auto;
}

.grouped {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  & .panel {
    flex: 1;
    font-size: 1.25rem;
  }
  & .gallery {
    flex: 1;
  }
}

.footnote {
  opacity: 0.6;
  font-size: 0.8rem;
  text-align: center;
  margin: 40px 0 0;

  & a {
    color: rgb(var(--on-primary-color));
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}

@media only screen and (max-width: 1024px) {
  .footer {
    padding: 20px;
  }
  .grouped {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}
</style>

<i18n lang="yaml">
ru-RU:
  navigation: "Навигация"
  our-mission: "Наша миссия"
  how-can-you-help: "Как вы можете помочь"
  give-things: "Принести гуманитарную помощь"
  send-money: "Отправить деньги"
  become-volunteer: "Стать волонтёром"
  our-friends: "Нам помогают"
  gratitude: "Благодарность"
  contacts: "Контакты"
  embassy-of-ukraine: "Посольство Украины в Республике Казахстан:"
  volunteer-coordination: "Координация волонтеров:"
  information-coordination: "Координация информационной поддержки:"
kk-KZ:
  navigation: "Навигация"
  our-mission: "Біздің миссиямыз"
  how-can-you-help: "Сіз қалай көмектесе аласыз"
  give-things: "Гуманитарлық көмек көрсетіңіз"
  send-money: "Ақша жіберу"
  become-volunteer: "Ерікті болыңыз"
  our-friends: "Олар бізге көмектеседі"
  gratitude: "Алғыс"
  contacts: "Байланыс"
  embassy-of-ukraine: "Қазақстан Республикасындағы Украина Елшілігі:"
  volunteer-coordination: "Еріктілерді ұйымдастырушы"
  information-coordination: "Ақпараттық қамтамасыз етуді ұйымдастырушы"
ru-UA:
  navigation: "Навігація"
  our-mission: "Наша місія"
  how-can-you-help: "Як ви можете допомогти"
  give-things: "Принести гуманітарну допомогу"
  send-money: "Відправити гроші"
  become-volunteer: "Стати волонтером"
  our-friends: "Нам допомагають"
  gratitude: "Подяка"
  contacts: "Контакти"
  embassy-of-ukraine: "Посольство України в Республіці Казахстан:"
  volunteer-coordination: "Координація волонтерів:"
  information-coordination: "Координація інформаційної підтримки:"
en-US:
  navigation: "Navigation"
  our-mission: "Our mission"
  how-can-you-help: "How can you help"
  give-things: "Bring humanitarian aid"
  send-money: "Send money"
  become-volunteer: "Become a volunteer"
  our-friends: "They help us"
  gratitude: "Acknowledgement"
  contacts: "Contacts"
  embassy-of-ukraine: "Embassy of Ukraine in the Republic of Kazakhstan:"
  volunteer-coordination: "Volunteer coordination:"
  information-coordination: "Information support coordination:"
</i18n>


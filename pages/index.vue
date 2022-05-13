<script lang="ts" setup>
//// Meta
import { Head } from "@vueuse/head";

//// Localization
const { t } = useI18n({
  inheritLocale: true,
});
</script>

<template>

  <Head>
    <title>{{ t("title") }}</title>
  </Head>
  <HowToNavigation>
    <NavigationChoice :step="1" :title="t('how-to-give-things')" link="#give-things"></NavigationChoice>
    <NavigationChoice :step="2" :title="t('how-to-send-money')" link="#send-money"></NavigationChoice>
    <NavigationChoice :step="3" :title="t('how-to-become-volunteer')" link="#become-volunteer"></NavigationChoice>
  </HowToNavigation>

  <main :class="[$style.main, $style.limiter]">
    <OurMission />
    <LatestAnnouncements />
    <LatestNews />

    <!-- How can you help -->
    <section :class="$style.section">
      <h2 :class="$style.title" id="how-can-you-help">{{ t("how-can-you-help") }}</h2>
      <ActionSection :class="$style['action-section']" id="give-things" :number="1" :title="t('give-things')"
        icon="#icon-box">
        <div :class="$style.grouped">
          <div :class="$style.panel">
            <div :class="$style.panel">
              <Requirements />
            </div>
          </div>
          <div :class="$style.panel">
            <div>{{ t("point-place") }}</div>
            <div :class="$style['place-info']">
              <svg fill="currentColor" :class="$style.icon" width="48" height="48">
                <use href="#icon-place" />
              </svg>
              <span :class="$style.text">{{ t("point-place-address") }}</span>
            </div>
            <div>{{ t("point-place-working-time") }}</div>
            <div :class="$style['place-info']">
              <svg fill="currentColor" :class="$style.icon" width="48" height="48">
                <use href="#icon-time" />
              </svg>
              <span :class="$style.text">{{
                  t("point-place-working-time-diapason")
              }}</span>
            </div>

            <div :class="$style.map">
              <Map />
            </div>
          </div>
        </div>
      </ActionSection>

      <ActionSection :class="$style['action-section']" id="send-money" :number="2" :title="t('send-money')"
        icon="#icon-money">
        <div :class="$style.grouped">
          <div :class="$style.panel">
            <p>{{ t("card-to-bank") }}</p>
            <a :class="$style.button" target="_blank" href="https://bank.gov.ua/ua/about/humanitarian-aid-to-ukraine">
              <svg fill="currentColor" :class="$style.icon" width="48" height="48">
                <use href="#icon-bank" />
              </svg>
              <span :class="$style.text">{{ t("go-to-bank-website") }}</span>
            </a>
            <br />
            <p>{{ t("card-to-embassy") }}</p>
            <a :class="$style.button" target="_blank" href="https://links.paybox.money/?slug=NEzfh">
              <svg fill="currentColor" :class="$style.icon" width="48" height="48">
                <use href="#icon-card" />
              </svg>
              <span :class="$style.text">{{ t("go-to-embassy-website") }}</span>
            </a>
          </div>
          <div :class="$style.panel">
            <p>{{ t("transfer-to-embasy") }}</p>
            <Card>
              ПОСОЛЬСТВО УКРАИНЫ В РЕСПУБЛИКЕ КАЗАХСТАН
              <br />БИН 020 750 015 536 <br />РНН 600 700 130 010 <br />ИИК –
              KZ68601А871002315181 <br />в АО “Народный Банк Казахстана” г. Нур-Султан
              <br />БИК – HSBKKZKX <br />КБЕ 21 <br />КНП 119
            </Card>
          </div>
        </div>
      </ActionSection>
      <ActionSection :class="$style['action-section']" id="become-volunteer" :number="3" :title="t('become-volunteer')"
        icon="#icon-group">
        <div :class="$style.grouped">
          <div :class="$style.panel">
            <div v-html="t('become-volunteer-description')" />
            <a :class="$style.button" href="https://forms.gle/tZ1ATE18bHsuGGQq7">
              <svg fill="currentColor" :class="$style.icon" width="48" height="48">
                <use href="#icon-contract" />
              </svg>
              <span :class="$style.text">{{ t("volunteer-form") }}</span>
            </a>
          </div>
          <div :class="$style.gallery">
            <img :class="$style.team" src="/photos/team.jpg" />
          </div>
        </div>
      </ActionSection>
    </section>

    <Press/>

    <!-- Our friends -->
    <section :class="$style.section">
      <h2 :class="$style.title">{{ t("our-friends") }}</h2>
      <div>
        <Person :name="t('arman-shuraev')" :position="t('arman-shuraev-position')" :avatar="'/avatars/1.jpg'"
          :action="t('arman-shuraev-action')" />
      </div>
    </section>

    <!-- Gratitude -->
    <section :class="$style.section">
      <h2 :class="$style.title">{{ t("gratitude") }}</h2>
      <div :class="$style.grouped">
        <div :class="$style.panel">
          <div v-html="t('appeal-description')" />
          <Card>
            <figure :class="$style.quote">
              <blockquote>{{ t("appeal") }}</blockquote>
              <figcaption :class="$style.author">
                {{ t("oksana-vrublevskaya") }}
              </figcaption>
            </figure>
          </Card>
        </div>
        <div :class="$style.gallery">
          <img :class="$style.team" src="/photos/oksana-vrublevskaya.jpg" />
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="postcss" module>
.quote {
  font-family: "Noto Serif", Georgia, Trebuchet, serif;
  font-style: italic;
  font-weight: 400;
  margin: 0;

  & blockquote {
    margin: 0;
  }
}

.author {
  text-align: center;
  margin-top: 20px;
  color: rgb(var(--primary-color));
}

p {
  margin: 0 0 20px 0;
}

.things-list {
  margin: 6px 10px;
  list-style-type: none;
  padding: 0;
}

.button {
  padding: 20px;
  background: rgb(var(--primary-color));
  border-radius: 8px;
  /* background: #eee; */
  position: relative;
  text-decoration: none;
  color: rgb(var(--on-primary-color), 0.95);
  display: flex;
  align-items: center;
  transition: background-color 250ms ease;
  font-size: 1.5rem;
  line-height: 1;

  &:hover {
    background: rgb(var(--accent-color));
  }

  & .icon {
    width: 64px;
    height: 64px;
  }

  & .text {
    flex: 1;
    display: block;
    text-align: center;
  }
}

.action-section {
  margin-top: 40px;
}

.place-info {
  font-size: 1.25rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  color: rgb(var(--primary-color));
  margin: 10px 0;

  & .icon {
    margin-right: 10px;
    flex-shrink: 0;
  }
}

@media only screen and (max-width: 1024px) {
  .place-info {
    font-size: 1.25rem;
  }
}

.team {
  width: 100%;
  border-radius: 4px;
  overflow: hidden;
  display: block;
  margin: 0;
}

.map {
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  overflow: hidden;
  height: 580px;
  margin-bottom: 20px;
}

.section {
  margin: 0 40px 40px;
}

.main {
  padding: 40px 0;
}

@media only screen and (max-width: 1024px) {
  .section {
    margin: 20px;
  }

  .main {
    padding: 0;
  }
}

.limiter {
  max-width: 1280px;
  margin: 0 auto;
}

.main-description {
  text-align: center;
  font-size: 1.25rem;
}

.title {
  font-size: 2.5rem;
  line-height: 1.2;
  font-weight: 500;
  color: rgb(var(--accent-color));
  display: flex;
  align-items: center;
  margin: 0;
  padding: 40px 0;

  &::before {
    content: "";
    display: block;
    width: 100px;
    height: 28px;
    background: rgb(var(--accent-color));
    margin-right: 20px;
    border-radius: 20px;
  }
}

@media only screen and (max-width: 1024px) {
  .title {
    font-size: 1.8rem;
    margin: 0 0 20px;
    padding: 20px 0;

    &::before {
      width: 60px;
      height: 28px;
    }
  }
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

@media only screen and (max-width: 1024px) {
  .grouped {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}

/* Accordion */
.accordion-title {
  display: block;
  background: red;
  margin: 0;
}

.accordion-content {
  margin: 0;
  overflow: hidden;
  background: blue;
}
</style>

<i18n lang="yaml">
ru:
  title: "Штаб гуманитарной поддержки Украины в Казахстане"
  give-things: "Принести гуманитарную помощь"
  send-money: "Отправить деньги"
  become-volunteer: "Стать волонтёром"
  how-to-give-things: "Куда и какую принести гуманитарную помощь?"
  how-to-send-money: "Как помочь деньгами?"
  how-to-become-volunteer: "Как стать волонтёром?"
  how-can-you-help: "Как вы можете помочь?"
  medicines: "Медицинские приборы и лекарства"
  food: "Продукты питания"
  for-childs: "Для детей"
  field-medicine: "Полевая медицина"
  point-place: "Пункт приёма гуманитарной помощи находится в Посольстве Украины в Республике Казахстан по адресу:"
  point-place-address: "г. Астана, ул. Жылой, 12, м-н Караоктель-2"
  point-place-working-time: "Время приёма гуманитарной помощи:"
  point-place-working-time-diapason: "В любой день с 08:00 - 19:00"
  card-to-bank: "Переведите средства с карты в Нац. Банк Украины:"
  transfer-to-embasy: "Переведите средства на счет Посольства по реквизитам:"
  go-to-bank-website: "Перейти на сайт банка"
  card-to-embassy: "Переведите средства с карты на счёт Посольства:"
  go-to-embassy-website: "Перейти к форме оплаты"
  become-volunteer-description:
    "<p>Штаб гуманитарной поддержки Украины проводит набор волонтеров на разные позиции.</p>
    <ul>
    <li>Физическое участие в сборе помощи — приём, упаковка, маркировка, погрузка.</li>
    <li>Онлайн участие — консультирование, SMM, дизайн, перевод, поиск информации и прочее.</li>
    <li>Организационная деятельность в сборе помощи.</li>
    </ul>
    <p>Возможно, именно ваши способности и навыки нам пригодятся.</p>"
  volunteer-form: "Заполнить анкету волонтёра"
  our-friends: "Нам помогают"
  gratitude: "Благодарность"
  appeal-description: "<p>Обращение супруги Посла Украины в Республике Казахстан:</p>"
  appeal: "Люди открывают свои домашние аптечки и несут последнее. Это невероятно. Я не ожидала, что наша трагедия так близка народу Казахстану. От имени всех украинских семей мы искренне благодарим казахстанцев за непрерывную помощь и поддержку! Это огромнейший вклад в развитие тесных отношений между нашими народами, у которых есть много общих страниц истории, в том числе трагических. Казахстан понимает нашу боль, мы чувствуем это."
  oksana-vrublevskaya: "Оксана Врублевская"
  arman-shuraev: "Арман Шураев"
  arman-shuraev-position: "Общественный деятель и предприниматель"
  arman-shuraev-action: "Поддержал инициативу Ел болашағы, организовал плов для волонтёров, которые сортировали и загружали гуманитарную помощь, выделил 1 миллион тенге на питание волонтеров."

kz:
  title: "Қазақстандағы Украинаға гуманитарлық қолдау көрсету штабы"
  give-things: "Гуманитарлық көмек әкелу"
  send-money: "Қаржылай көмек көрсету"
  become-volunteer: "Волонтёр болу"
  how-to-give-things: "Қайда және қандай гуманитарлық көмек әкелу керек?"
  how-to-send-money: "Ақшамен қалай көмектесуге болады?"
  how-to-become-volunteer: "Қалай волонтер болуға болады?"
  how-can-you-help: "Сіз қалай көмектесе аласыз?"
  medicines: "Медициналық бұйымдар мен дәрі-дәрмектер"
  food: "Азық-түлік"
  for-childs: "Балаларға арналған"
  field-medicine: "Дала медицинасы"
  point-place: "Гуманитарлық көмекті қабылдау пункті, Украинаның Қазақстан Республикасындағы Елшілігі, мына мекен-жай бойынша орналасқан:"
  point-place-address: "г. Астана, ул. Жылой, 12, м-н Караоктель-2"
  point-place-working-time: "Гуманитарлық көмекті қабылдау уақыты:"
  point-place-working-time-diapason: "Кез келген күні сағат 08:00-ден 19:00-ге дейін"
  card-to-bank: "Картадан Nat-қа ақша аударыңыз. Украина банкі:"
  transfer-to-embasy: "Мына мәліметтер бойынша елшілік шотына ақша аударыңыз:"
  go-to-bank-website: "Банктің веб-сайтына өту"
  card-to-embassy: "Карточкадан Елшіліктің шотына ақша аудару:"
  go-to-embassy-website: "Төлем формасына өтіңіз"
  become-volunteer-description:
    "<p>Украинаға гуманитарлық қолдау штабына әртүрлі бағытта волонтёр қажет, атап айтқанда:/p>
    <ul>
    <li>Гум. көмек жинауға атсалысу - қабылдау, орау, таңбалау, тиеу.</li>
    <li>Онлайн көмек - кеңес беру, SMM, дизайн, аударма, ақпаратты іздеу және т.б.</li>
    <li>Ұйымдық көмек.</li>
    </ul>
    <p>Сіздің қабілеттеріңіз бен дағдыларыңыз бізге пайдалы болуы мүмкін.</p>"
  volunteer-form: "Волонтёр формасын толтырыңыз"
  our-friends: "Бізге қол ұшын бергендер:"
  gratitude: "Алғыс"
  appeal-description: "<p>Украинаның Қазақстан Республикасындағы Елшісі жұбайының жолдауы:</p>"
  appeal: "Халық үйіндегі соңғы дәрі-дәрімегін әкелуде. Бұл жан тебірентеді! Біздің қасірет Қазақстан азаматтарына соншалықты жақын болады деп күтпедім. Үздіксіз қолдау мен көмек үшін барлық украин отбасы атынан шын жүректен алғыс айтамыз! Бұл — тарихы ортақ, талай қуанышты күндер мен қайғыны бірге бастан кешірген екі халық арасындағы өзара қарым-қатынасты нығайтуға арналған зор қадам. Қазақстан халқы басымызға түскен ауыр кесапатты түсінеді және барынша қолдау көрсетіп отыр. Біз ол көмекті сезінеміз."
  oksana-vrublevskaya: "Оксана Врублевская"
  arman-shuraev: "Арман Шураев"
  arman-shuraev-position: "Қоғам қайраткері және кәсіпкер"
  arman-shuraev-action: "«Ел болашағы» бастамасын қолдап, ауыр жұмыс атқарған волонтёрлердің тағамына 1 миллион теңге бөлген кісі."

ua:
  title: "Штаб гуманітарної підтримки України у Казахстані"
  give-things: "Принести гуманітарну допомогу"
  send-money: "Відправити гроші"
  become-volunteer: "Стати волонтером"
  how-to-give-things: "Куди та яку принести гуманітарну допомогу?"
  how-to-send-money: "Як допомогти грошима?"
  how-to-become-volunteer: "Як стати волонтером?"
  how-can-you-help: "Як ви можете допомогти?"
  medicines: "Медичні прилади та ліки"
  food: "Продукти харчування"
  for-childs: "Для дітей"
  field-medicine: "Польова медицина"
  point-place: "Пункт прийому гуманітарної допомоги знаходиться в Посольстві України в Республіці Казахстан за адресою:"
  point-place-address: "г. Астана, ул. Жылой, 12, м-н Караоктель-2"
  point-place-working-time: "Час прийому гуманітарної допомоги:"
  point-place-working-time-diapason: "Будь-якого дня з 08:00 - 19:00"
  card-to-bank: "Зробити переказ коштів з картки до Нац. Банку України:"
  transfer-to-embasy: "Зробити переказ коштів на рахунок Посольства за реквізитами:"
  go-to-bank-website: "Перейти на сайт банку"
  card-to-embassy: "Переведіть кошти з картки на рахунок Посольства:"
  go-to-embassy-website: "Перейти до форми оплати"
  become-volunteer-description:
    "<p>Штаб гуманітарної підтримки України проводить набір волонтерів на різні позиції.</p>
    <ul>
    <li>Фізична участь у зборі допомоги - прийоnavigatorLangм, пакування, маркування, завантаження.</li>
    <li>Онлайн участь — консультування, SMM, дизайн, переклад, пошук інформації та інше.</li>
    <li>Організаційна діяльність у зборі допомоги.</li>
    </ul>
    <p>Можливо, саме Ваші здібності та навички нам знадобляться.</p>"
  volunteer-form: "Заповнити анкету волонтера"
  our-friends: "Нам допомагають"
  gratitude: "Подяка"
  appeal-description: "<p>Звернення дружини Посла України у Республіці Казахстан:</p>"
  appeal: "Люди відкривають свої домашні аптечки і віддають останнє. Це неймовірно. Я не очікувала, що наша трагедія стане такою близькою народові Казахстану. Від імені усіх родин України ми щиро дякуємо громадянам Казахстану за безперервну допомогу та підтримку!Це величезний внесок до розвитку тісних відносин між нашими народами, які мають багато спільних сторінок історії, у тому числі трагічних. Казахстан розуміє наш біль, ми це відчуваємо."
  oksana-vrublevskaya: "Оксана Врубльовська"
  arman-shuraev: "Арман Шураєв"
  arman-shuraev-position: "Громадський діяч та підприємець"
  arman-shuraev-action: "Підтримав ініціативу Ел болашағи, організував плов для волонтерів, які сортували і завантажували гуманітарну допомогу, виділив 1 мільйон тенге на харчування волонтерів."

en:
  title: "Humanitarian Aid Headquarters for Ukraine in Kazakhstan"
  give-things: "Bring humanitarian aid"
  send-money: "Send money"
  become-volunteer: "Become a volunteer"
  how-to-give-things: "Where and what kind of humanitarian aid to bring?"
  how-to-send-money: "How to help with money?"
  how-to-become-volunteer: "How to become a volunteer?"
  how-can-you-help: "How can you help?"
  medicines: "Medical devices and medicines"
  food: "Food"
  for-childs: "For children"
  field-medicine: "Field medicine"
  point-place: "Humanitarian aid reception facility is located at the Embassy of Ukraine in the Republic of Kazakhstan at the address:"
  point-place-address: "г. Астана, ул. Жылой, 12, м-н Караоктель-2"
  point-place-working-time: "Humanitarian aid reception hours:"
  point-place-working-time-diapason: "Any day from 08:00 - 19:00"
  card-to-bank: "Transfer funds to Nat. Bank of Ukraine via a bank card:"
  transfer-to-embasy: "Transfer funds to the Embassy using the following bank details:"
  go-to-bank-website: "Go to the bank's website"
  card-to-embassy: "Transfer funds to the Embassy via a bank card:"
  go-to-embassy-website: "Go to payment form"
  become-volunteer-description:
    "<p>The Humanitarian Aid Headquarters for Ukraine is recruiting volunteers for various positions.</p>
    <ul>
    <li>On-site assistance: humanitarian aid acceptance, packaging, labeling, loading.</li>
    <li>Online participation - consulting, SMM, design, translation, information search and more.</li>
    <li>Organizational activities in fundraising.</li>
    </ul>
    <p>Perhaps it is your abilities and skills that will be useful to us.</p>"
  volunteer-form: "Volunteer application form"
  our-friends: "They help us"
  gratitude: "Acknowledgement"
  appeal-description: "<p>Ukrainian Ambassador’s wife addressed the Republic of Kazakhstan:</p>"
  appeal: "They open their medicine boxes and bring us the little they have. This is astonishing. I wasn't expecting the people of Kazakhstan to care so much about our tragedy. On behalf of all Ukrainian families, we sincerely thank Kazakhstan citizens for their continuous help and support! This is a great contribution to the development of close relations between the two nations. Our historical paths have so much in common, and we share many tragical experiences of the past. Kazakhstan knows our pain, we can feel it."
  oksana-vrublevskaya: "Oksana Vrublevskaya"
  arman-shuraev: "Arman Shuraev"
  arman-shuraev-position: "Public figure and entrepreneur"
  arman-shuraev-action: "He supported the initiative of El bolashagy, organized a party for the volunteers who sorted and loaded humanitarian aid, allocated 1 million tenge for food for volunteers."
</i18n>

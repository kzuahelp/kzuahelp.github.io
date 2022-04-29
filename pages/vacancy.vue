<script setup lang="ts">
import vacancies from "../data/lists/vacancies.json"
import { useI18n } from "vue-i18n";

//// Localization
const { t } = useI18n({
  inheritLocale: true,
});
</script>

<template>
  <main :class="[$style.main, $style.limiter]">
    <section :class="$style.section">
      <h2 :class="$style.title" id="vacancy">{{ t("navigation.vacancy") }}</h2>
      <div :class="$style.panel">
        <Card v-for="vacancy in vacancies" :class="$style.vacancy">
          <h3>{{ vacancy.name }}</h3>
          <p>{{ vacancy.description }}</p>
          <p><strong>{{ t('vacancy.responsibilities') }}</strong></p>
          <ul>
            <li v-for="responsibility in vacancy.responsibilities">
              {{ responsibility }}
            </li>
          </ul>
          <p><strong>{{ t('vacancy.requirements') }}</strong></p>
          <ul>
            <li v-for="requirement in vacancy.requirements">
              {{ requirement }}
            </li>
          </ul>
          <template v-if="vacancy.schedule">
            <p><strong>{{ t('vacancy.schedule') }}</strong></p>
            <p>{{ vacancy.schedule }}</p>
          </template>
          <p><strong>{{ t('vacancy.contacts') }}</strong></p>
          <dl>
            <template v-for="contact in vacancy.contacts">
              <dt>{{ contact.name }}</dt>
              <dd><a :href="`tel:${contact.phone}`">{{ contact.phone }}</a></dd>
            </template>
          </dl>
        </Card>
      </div>
    </section>
  </main>
</template>


<style module lang="postcss">
.vacancy {
  margin-bottom: 40px;

  &:last-child {
    margin-bottom: 0;
  }

  & h3 {
    margin-top: 0;
    font-size: 2rem;
    font-weight: 500;
  }

  & dl {
    display: grid;
    grid-template-columns: max-content auto;
  }

  & p:last-child,
  & dl:last-child {
    margin-bottom: 0;
  }

  & dt {
    grid-column-start: 1;
  }

  & dd {
    grid-column-start: 2;
    margin-left: 20px;
  }

  & a {
    color: rgb(var(--primary-color));
    text-decoration: none;

    &:hover {
      color: rgb(var(--accent-color));
      text-decoration: underline;
    }
  }
}


.section {
  margin: 0 40px 40px;
  font-size: 1.2rem;
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

.group {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}

@media only screen and (max-width: 1024px) {
  .group {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}

.section {
  margin: 0 40px 40px;
}

@media only screen and (max-width: 1024px) {
  .section {
    margin: 20px;
  }
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

.panel {
  font-size: 1.25rem;
  display: flex;
  flex-flow: column;
}
</style>

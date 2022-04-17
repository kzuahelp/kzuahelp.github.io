<script setup lang="ts">
const formData = {};

async function postData(url = "", data = {}) {
  const response = await fetch(url, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "omit",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams(data),
  });

  return await response;
}

const sendForm = async function () {
  const response = await postData(
    "https://docs.google.com/forms/d/e/1FAIpQLSePO2cptro1VTLtV0GgJWsU1Z-SpIYbOInQ-dsI-og1JfuTrg/formResponse",
    {
      "entry.864684790": "item",
      "entry.1671882586": "contact",
      "entry.1121020542": "address",
    }
  );
};
</script>

<template>
  <form @submit.prevent="sendForm">
    <input type="text" name="contact" placeholder="Ваш телефон или иной способ связи" />
    <input
      type="text"
      name="address"
      placeholder="Адрес доставки или укажите когда заберёте"
    />
    <button @click="sendForm">Заказать</button>
  </form>
</template>

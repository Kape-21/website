<script setup lang="ts">
import Image from "@/components/base/Image.vue";
import { TeamSocials } from "@/constants/routes.ts";
import { translate } from "@/lib/translations/translate.ts";
import { inject } from "vue";
import type { ContextLocaleType } from "@/types/context-locale.type.ts";
import { LocaleContextKey } from "@/constants/application.ts";

const locale = inject<ContextLocaleType>(LocaleContextKey);
</script>

<template>
  <div class="mx-auto my-12 max-w-240 px-4">
    <div class="w-full flex flex-col gap-4 rounded-md bg-catppuccin-900 p-2">
      <p class="select-text p-2 text-xl text-white font-semibold sm:text-3xl">
        {{ translate(TeamSocials.Maintainers.Key, locale) }}
      </p>
      <div class="flex flex-wrap gap-4">
        <a
          v-for="member of TeamSocials.Maintainers.List"
          :key="member.Name"
          :href="member.Link"
          class="group w-full flex flex-nowrap gap-4 border border-transparent rounded-md p-2 transition-[background-color,border-color] lg:max-w-112 hover:border-mauve hover:bg-[theme(colors.mauve/.4)]"
        >
          <Image
            class-names="h-20 w-20 rounded-md"
            :src="member.Image"
            :alt="`${member.Name}'s profile picture`"
          />
          <div class="flex flex-col gap-2">
            <div class="flex flex-wrap items-center gap-2 break-all">
              <p class="select-text text-xl text-mauve font-semibold transition-[color] group-hover:text-white">
                {{ member.Name }}
              </p>
              <div class="select-text rounded-md bg-catppuccin-800 px-2 py-1 text-sm text-catppuccin-200 leading-none">
                {{ member.Badge }}
              </div>
            </div>
            <p class="select-text text-sm text-white">
              {{ translate(member.Description, locale) }}
            </p>
          </div>
        </a>
      </div>
      <p class="select-text p-2 text-xl text-white font-semibold sm:text-3xl">
        {{ translate(TeamSocials.Contributors.Key, locale) }}
      </p>
      <div class="flex flex-wrap gap-4 p-2">
        <a
          v-for="contributor in TeamSocials.Contributors.List"
          :key="contributor.Link"
          :href="contributor.Link"
          class="transition-[filter] hover:grayscale-100"
        >
          <Image
            class-names="h-12 w-12 rounded-md"
            :src="contributor.Image"
            alt="A contributor's profile picture"
          />
        </a>
      </div>
      <p class="select-text p-2 text-xl text-white font-semibold sm:text-3xl">
        {{ translate(TeamSocials.Special.Key, locale) }}
      </p>
      <a
        :href="TeamSocials.Special.Entry.Link"
        class="w-fit p-2 transition-[filter] hover:grayscale-100"
      >
        <Image
          class-names="h-12 w-12"
          :src="TeamSocials.Special.Entry.Image"
          alt="ElyPrismLauncher logo"
        />
      </a>
    </div>
  </div>
</template>
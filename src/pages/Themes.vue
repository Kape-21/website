<script setup lang="ts">
import Page from "@/components/layout/Page.vue";
import { inject } from "vue";
import ThemeGenerator from "@/components/themes/ThemeGenerator.vue";
import { TranslationsContextKey } from "@/constants/application.ts";
import type { TranslationsReferenceType } from "@/types/translations-reference.type.ts";

document.title = "Themes - Freesm Launcher";
document
  ?.querySelector?.("meta[name=\"description\"]")
  ?.setAttribute?.(
    "content",
    "Easily create and preview your Freesm Launcher theme in real-time.",
  );

const translations = inject<TranslationsReferenceType>(TranslationsContextKey);

const themeJson = JSON.stringify({
  "colors": {
    "AlternateBase"  : "#9e7372",
    "Base"           : "#bfa85e",
    "BrightText"     : "#e0e031",
    "Button"         : "#94e031",
    "ButtonText"     : "#2c4709",
    "Highlight"      : "#5805ff",
    "HighlightedText": "#98f5f5",
    "Link"           : "#9e98f5",
    "Text"           : "#110b66",
    "ToolTipBase"    : "#521087",
    "ToolTipText"    : "#cbace3",
    "Window"         : "#d620c7",
    "WindowText"     : "#d62081",
    "fadeAmount"     : 0.1,
    "fadeColor"      : "#400000",
  },
  "name"   : "Test 1",
  "widgets": "Fusion",
}, null, 2);
const themeStyle = "/* Freesm's theme elements usage */\n" +
  "QAbstractScrollArea{background-color: red;}\n" +
  "QCheckBox{background-color: red;}\n" +
  "QColumnView{background-color: red;}\n" +
  "QComboBox{background-color: red;}\n" +
  "/* QDateEdit */\n" +
  "QDateTimeEdit{background-color: red;}\n" +
  "QDialog{background-color: red;}\n" +
  "/* QDialogButtonBox */\n" +
  "QDockWidget{background-color: red;}\n" +
  "QDoubleSpinBox{background-color: red;}\n" +
  "/* QFrame */\n" +
  "QGroupBox{background-color: red;}\n" +
  "QHeaderView{background-color: red;}\n" +
  "QLabel{background-color: red;}\n" +
  "QLineEdit{background-color: red;}\n" +
  "QListView{background-color: red;}\n" +
  "/* QListWidget */\n" +
  "QMainWindow{background-color: red;}\n" +
  "QMenu{background-color: red;}\n" +
  "QMenuBar{background-color: red;}\n" +
  "/* QMessageBox */\n" +
  "QProgressBar{background-color: red;}\n" +
  "QPushButton{background-color: red;}\n" +
  "QRadioButton{background-color: red;}\n" +
  "/* QScrollBar */\n" +
  "QSizeGrip{background-color: red;}\n" +
  "QSlider{background-color: red;}\n" +
  "QSpinBox{background-color: red;}\n" +
  "/* QSplitter */\n" +
  "QStatusBar{background-color: red;}\n" +
  "QTabBar{background-color: red;}\n" +
  "QTabWidget{background-color: red;}\n" +
  "QTableView{background-color: red;}\n" +
  "/* QTableWidget */\n" +
  "QTextEdit{background-color: red;}\n" +
  "/* QTimeEdit */\n" +
  "QToolBar{background-color: red;}\n" +
  "/* QToolBox */\n" +
  "QToolButton{background-color: red;}\n" +
  "QToolTip{background-color: red;}\n" +
  "QTreeView{background-color: red;}\n" +
  "/* QTreeWidget */\n" +
  "QWidget{background-color: red;}";

console.log(themeJson, themeStyle);
</script>

<template>
  <Page>
    <div class="mx-auto max-w-240 flex flex-col gap-8 px-4 pt-12">
      <p class="select-text text-center text-balance text-5xl text-white font-bold sm:text-7xl">
        {{ translations?.Messages?.["pages.themes.title"] }}
      </p>
      <p class="select-text text-center text-balance text-lg text-gray-400 sm:text-2xl">
        {{ translations?.Messages?.["pages.themes.description"] }}
      </p>
    </div>
    <ThemeGenerator />
  </Page>
</template>
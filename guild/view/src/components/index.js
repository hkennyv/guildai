import GuildAudio from './guild-audio.vue';
import GuildFilesViewer from './guild-files-viewer.vue';
import GuildRunFiles from './guild-run-files.vue';
import GuildRunOverview from './guild-run-overview.vue';
import GuildRunTitlebar from './guild-run-titlebar.vue';
import GuildRunsList from './guild-runs-list.vue';
import GuildText from './guild-text.vue';
import GuildView from './guild-view.vue';
import GuildViewToolbar from './guild-view-toolbar.vue';

GuildView.install = function install(Vue) {
  Vue.component(GuildAudio.name, GuildAudio);
  Vue.component(GuildFilesViewer.name, GuildFilesViewer);
  Vue.component(GuildRunFiles.name, GuildRunFiles);
  Vue.component(GuildRunOverview.name, GuildRunOverview);
  Vue.component(GuildRunTitlebar.name, GuildRunTitlebar);
  Vue.component(GuildRunsList.name, GuildRunsList);
  Vue.component(GuildText.name, GuildText);
  Vue.component(GuildView.name, GuildView);
  Vue.component(GuildViewToolbar.name, GuildViewToolbar);
};

export default GuildView;

import{_ as s,c as i,o as a,a4 as l}from"./chunks/framework.nQaBHiNx.js";const g=JSON.parse('{"title":"Hide Scrollbar","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"custom-styles/hide-scrollbar.md","filePath":"custom-styles/hide-scrollbar.md"}'),n={name:"custom-styles/hide-scrollbar.md"},e=l(`<h1 id="hide-scrollbar" tabindex="-1">Hide Scrollbar <a class="header-anchor" href="#hide-scrollbar" aria-label="Permalink to &quot;Hide Scrollbar&quot;">​</a></h1><p>You can force-hide the scrollbar for a certain element by adding a custom class.</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-ZDw0X" id="tab-j7RT89Q" checked="checked"><label for="tab-j7RT89Q">main.css</label><input type="radio" name="group-ZDw0X" id="tab-PZDhKQH"><label for="tab-PZDhKQH">vue template</label></div><div class="blocks"><div class="language-css vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* Hide scrollbar */</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.hide-scrollbar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    -ms-overflow-style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">none</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* IE and Edge */</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    scrollbar-width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">none</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* Firefox */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* Hide scrollbar for Chrome, Safari and Opera */</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.hide-scrollbar::-webkit-scrollbar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    display</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">none</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;hide-scrollbar&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      context that would create a scroll bar we want to hide</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div></div></div>`,3),t=[e];function h(p,k,r,d,c,E){return a(),i("div",null,t)}const y=s(n,[["render",h]]);export{g as __pageData,y as default};

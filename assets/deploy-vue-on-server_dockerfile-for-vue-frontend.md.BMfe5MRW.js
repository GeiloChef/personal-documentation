import{_ as s,c as n,o as i,a4 as a}from"./chunks/framework.nQaBHiNx.js";const g=JSON.parse('{"title":"Dockerfile for Vue 3 Frontend with lighttpd","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"deploy-vue-on-server/dockerfile-for-vue-frontend.md","filePath":"deploy-vue-on-server/dockerfile-for-vue-frontend.md"}'),e={name:"deploy-vue-on-server/dockerfile-for-vue-frontend.md"},t=a(`<h1 id="dockerfile-for-vue-3-frontend-with-lighttpd" tabindex="-1">Dockerfile for Vue 3 Frontend with <code>lighttpd</code> <a class="header-anchor" href="#dockerfile-for-vue-3-frontend-with-lighttpd" aria-label="Permalink to &quot;Dockerfile for Vue 3 Frontend with \`lighttpd\`&quot;">​</a></h1><p>This dockerfile is used to automatically de</p><div class="language-dockerfile vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">dockerfile</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">FROM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> node:20-alpine </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">AS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> builder</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">COPY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> package.json .</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">COPY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> package-lock.json .</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">RUN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> npm install --non-interactive</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">COPY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ../vue-with-typescript .</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">RUN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> npm run build-only --production</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">FROM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> rtsp/lighttpd</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">COPY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> --from=builder dist /var/www/html/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">COPY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> router.conf /etc/lighttpd/conf.d</span></span></code></pre></div><h2 id="router-config" tabindex="-1">Router Config <a class="header-anchor" href="#router-config" aria-label="Permalink to &quot;Router Config&quot;">​</a></h2><p>The Following config settings are needed to deploy the vue frontend with <code>lighttdp</code> and make the web history routing possible.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// router.conf</span></span>
<span class="line"><span></span></span>
<span class="line"><span>server.modules += ( &quot;mod_rewrite&quot; )</span></span>
<span class="line"><span></span></span>
<span class="line"><span>url.rewrite-if-not-file = ( &quot;&quot; =&gt; &quot;/&quot; )</span></span></code></pre></div>`,6),l=[t];function p(o,r,h,d,c,k){return i(),n("div",null,l)}const f=s(e,[["render",p]]);export{g as __pageData,f as default};

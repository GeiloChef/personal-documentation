import{_ as e,c as t,o as s,a4 as a}from"./chunks/framework.nQaBHiNx.js";const g=JSON.parse('{"title":"Protect a Folder using a .htaccess so only authenticated user can access (parts of) your Website","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"hosting/protect-a-folder-with-htpasswd.md","filePath":"hosting/protect-a-folder-with-htpasswd.md"}'),o={name:"hosting/protect-a-folder-with-htpasswd.md"},i=a('<h1 id="protect-a-folder-using-a-htaccess-so-only-authenticated-user-can-access-parts-of-your-website" tabindex="-1">Protect a Folder using a <code>.htaccess</code> so only authenticated user can access (parts of) your Website <a class="header-anchor" href="#protect-a-folder-using-a-htaccess-so-only-authenticated-user-can-access-parts-of-your-website" aria-label="Permalink to &quot;Protect a Folder using a `.htaccess` so only authenticated user can access (parts of) your Website&quot;">​</a></h1><p>If you want to protect your deployed Website (or part of it) from unauthorized access, but you don&#39;t want to set up a full authentication logic yourself, you can make use of the easy authentication using the right combination of <code>.htaccess</code> and <code>.htpasswd</code>.</p><div class="info custom-block"><p class="custom-block-title">🔎 Info</p><p>For this tutorial we assume you have already successfully deployed your webpage on an <em>Apache</em> server.</p></div><h2 id="create-htaccess-and-htpasswd" tabindex="-1">Create <code>.htaccess</code> and <code>.htpasswd</code> <a class="header-anchor" href="#create-htaccess-and-htpasswd" aria-label="Permalink to &quot;Create `.htaccess` and `.htpasswd`&quot;">​</a></h2><p>First step is to create a <code>.htaccess</code> and a <code>.htpasswd</code>. Those two files will take care of the authentication of every user that tries to enter your website.</p><p>The password needs to be hashed. You can use any .htaccess-generator on the web to generate your password-hash.</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-_6f2B" id="tab-NwbbqRD" checked="checked"><label for="tab-NwbbqRD">.htaccess</label><input type="radio" name="group-_6f2B" id="tab-CE0HAA4"><label for="tab-CE0HAA4">.htpasswd</label></div><div class="blocks"><div class="language-text vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>AuthType Basic</span></span>\n<span class="line"><span>AuthName &quot;Protected Directory&quot;</span></span>\n<span class="line"><span>AuthUserFile  route/to/your/.htpasswd</span></span>\n<span class="line"><span>Require valid-user</span></span></code></pre></div><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>admin:$2y$10$xhiTb7Bzh87Gjb48hCP9</span></span></code></pre></div></div></div><div class="info custom-block"><p class="custom-block-title">🔎 Info</p><p>Having the correct route to the .htpasswd can be challenging depending on your hosting provider as you need the <em><strong>full path</strong></em> to the file.</p><p>If you have trouble with that you can create a PHP-file with the following content.</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;?</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">php</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> echo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $_SERVER[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;DOCUMENT_ROOT&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?&gt;</span></span></code></pre></div><p>If you enter that page, it will print you out the <code>document root</code> of your project which you can then use to determine the path to your .htpasswd.</p></div>',8),c=[i];function n(p,h,r,d,l,u){return s(),t("div",null,c)}const b=e(o,[["render",n]]);export{g as __pageData,b as default};

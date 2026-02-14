document.addEventListener('DOMContentLoaded', function() {
    // 检查当前URL是否包含.md文件
    const currentUrl = window.location.href;
    if (currentUrl.includes('.md')) {
        // 显示返回主页按钮
        showBackToHomeButton();
        // 渲染MD文件
        renderMarkdownFile();
    }
    
    // 处理MD文件链接点击
    handleMarkdownLinks();
});

// 显示返回主页按钮
function showBackToHomeButton() {
    // 创建按钮容器
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'fixed top-4 right-4 z-50';
    
    // 创建返回按钮
    const backButton = document.createElement('button');
    backButton.className = 'pixel-btn flex items-center';
    backButton.innerHTML = '<i class="fa fa-home mr-2"></i> 返回主页';
    
    // 添加点击事件
    backButton.addEventListener('click', function() {
        window.location.href = 'index.html';
    });
    
    // 添加到页面
    buttonContainer.appendChild(backButton);
    document.body.appendChild(buttonContainer);
}

// 渲染MD文件
function renderMarkdownFile() {
    // 获取当前MD文件路径
    const currentUrl = window.location.href;
    
    // 创建渲染容器
    const renderContainer = document.createElement('div');
    renderContainer.className = 'container mx-auto px-4 py-8 mt-16';
    
    // 创建加载指示器
    const loadingIndicator = document.createElement('div');
    loadingIndicator.className = 'text-center py-16';
    loadingIndicator.innerHTML = '<i class="fa fa-spinner fa-spin text-4xl text-primary"></i><p class="mt-4">加载中...</p>';
    
    renderContainer.appendChild(loadingIndicator);
    
    // 保存原始页面内容
    const originalContent = document.body.innerHTML;
    
    // 清空页面并添加渲染容器
    document.body.innerHTML = '';
    document.body.className = 'bg-light text-dark';
    document.body.appendChild(renderContainer);
    
    // 尝试直接读取页面内容（适用于本地文件）
    try {
        // 检查是否是本地文件
        if (currentUrl.startsWith('file://')) {
            // 对于本地文件，使用原始内容
            // 重新获取页面内容
            const markdownContent = originalContent;
            if (markdownContent) {
                // 清除加载指示器
                renderContainer.innerHTML = '';
                
                // 创建内容容器
                const contentContainer = document.createElement('div');
                contentContainer.className = 'pixel-card max-w-3xl mx-auto';
                
                // 渲染Markdown
                const htmlContent = marked.parse(markdownContent);
                const sanitizedHtml = DOMPurify.sanitize(htmlContent);
                
                contentContainer.innerHTML = sanitizedHtml;
                renderContainer.appendChild(contentContainer);
            } else {
                throw new Error('无法读取文件内容');
            }
        } else {
            // 对于HTTP协议，使用fetch
            const filePath = currentUrl.split('/').pop();
            fetch(`res/${filePath}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('文件加载失败');
                    }
                    return response.text();
                })
                .then(markdownContent => {
                    // 清除加载指示器
                    renderContainer.innerHTML = '';
                    
                    // 创建内容容器
                    const contentContainer = document.createElement('div');
                    contentContainer.className = 'pixel-card max-w-3xl mx-auto';
                    
                    // 渲染Markdown
                    const htmlContent = marked.parse(markdownContent);
                    const sanitizedHtml = DOMPurify.sanitize(htmlContent);
                    
                    contentContainer.innerHTML = sanitizedHtml;
                    renderContainer.appendChild(contentContainer);
                })
                .catch(error => {
                    // 显示错误信息
                    renderContainer.innerHTML = '';
                    const errorContainer = document.createElement('div');
                    errorContainer.className = 'pixel-card max-w-3xl mx-auto text-center py-16';
                    errorContainer.innerHTML = `<div class="text-red-500 mb-4"><i class="fa fa-exclamation-circle text-4xl"></i></div><h2 class="text-xl mb-4">错误</h2><p class="text-sm">${error.message}</p>`;
                    renderContainer.appendChild(errorContainer);
                });
        }
    } catch (error) {
        // 显示错误信息
        renderContainer.innerHTML = '';
        const errorContainer = document.createElement('div');
        errorContainer.className = 'pixel-card max-w-3xl mx-auto text-center py-16';
        errorContainer.innerHTML = `<div class="text-red-500 mb-4"><i class="fa fa-exclamation-circle text-4xl"></i></div><h2 class="text-xl mb-4">错误</h2><p class="text-sm">${error.message}</p>`;
        renderContainer.appendChild(errorContainer);
    }
}

// 处理MD文件链接点击
function handleMarkdownLinks() {
    document.querySelectorAll('a[href$=".md"]').forEach(link => {
        link.addEventListener('click', function(e) {
            // 阻止默认行为
            e.preventDefault();
            
            // 获取MD文件路径
            const mdFilePath = this.getAttribute('href');
            
            // 检查是否是本地文件
            if (window.location.href.startsWith('file://')) {
                // 对于本地文件，直接跳转
                window.location.href = mdFilePath;
            } else {
                // 对于HTTP协议，使用完整路径
                window.location.href = mdFilePath;
            }
        });
    });
}
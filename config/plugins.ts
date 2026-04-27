module.exports = ({ env }) => {
  const documentBase = env('STRAPI_ADMIN_DOCUMENT_BASE_URL');
  const editorConfig = {
    paste_data_images: true,
    automatic_uploads: true,
    // Without these, TinyMCE turns /uploads/... into ../../../../uploads/...
    // (relative to the deep admin URL) and the frontend 404s.
    relative_urls: false,
    convert_urls: false,
    remove_script_host: false,
    ...(documentBase ? { document_base_url: documentBase } : {}),
  };

  return {
    tinymce: {
      enabled: true,
      config: {
        editor: {
          outputFormat: 'html',
          editorConfig,
        },
      },
    },
  };
};
